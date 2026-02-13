import AnimatedCounter from "./AnimatedCounter";
import { motion } from "framer-motion";
const StatCard = ({
  icon: Icon,
  value,
  label,
  colorClass,
  showPlus = false,
  isLive = false,
}) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
        },
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="group p-8 rounded-3xl bg-linear-to-b from-white/8 to-transparent border border-white/20 backdrop-blur-md hover:border-purple-500/50 transition-all duration-300 shadow-2xl relative overflow-hidden"
    >
      {/* Background Glow Effect */}
      <div className="absolute -top-4 -right-4 bg-white/5 p-8 rounded-full blur-2xl group-hover:bg-white/10 transition-colors" />

      <div className="relative w-fit mx-auto mb-4">
        <Icon
          size={32}
          className={`${colorClass} group-hover:scale-110 transition-transform duration-300`}
        />
        {isLive && (
          <span className="absolute -top-1 -right-2 flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
        )}
      </div>

      <div className={`text-4xl font-mono font-bold mb-1 ${colorClass}`}>
        <AnimatedCounter value={value} showPlus={showPlus} />
      </div>

      <p className="text-gray-500 text-xs font-bold uppercase tracking-[0.2em]">
        {label}
      </p>
    </motion.div>
  );
};

export default StatCard;
