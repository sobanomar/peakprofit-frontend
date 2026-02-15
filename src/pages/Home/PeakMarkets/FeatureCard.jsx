import { Link } from "react-router";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FeatureCard = ({ feature, index, cardVariants }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  const Icon = feature.icon;

  return (
    <motion.div
      variants={cardVariants}
      onMouseMove={handleMouseMove}
      className="group relative h-full rounded-3xl border border-white/10 p-8 transition-colors duration-500 hover:border-purple-500/50 hover:bg-white/[0.02] transform-gpu will-change-transform"
    >
      <Link
        to={`${import.meta.env.VITE_DASHBOARD_URL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full"
      >
        {/* Smoother Spotlight Glow */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              transparent 80%
            )
          `,
          }}
        />

        <div className="relative z-10 flex flex-col h-full">
          <div className="flex items-start justify-between mb-8">
            <motion.div
              whileHover={{ rotate: 5, scale: 1.05 }}
              className="rounded-2xl bg-brand-400/10 p-3 text-brand-400 ring-1 ring-brand-400/20 transition-all duration-300"
            >
              <Icon size={28} strokeWidth={1.5} />
            </motion.div>

            <div className="rounded-full bg-white/5 p-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 ease-out">
              <ArrowRight className="text-brand-400" size={18} />
            </div>
          </div>

          <h3 className="text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-brand-400 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-zinc-400 leading-relaxed text-sm lg:text-base transition-colors duration-300 group-hover:text-zinc-300">
            {feature.description}
          </p>

          <div className="mt-auto pt-6">
            <div className="h-[2px] w-0 bg-gradient-to-r from-brand-400 via-purple-500 to-transparent transition-all duration-700 ease-in-out group-hover:w-full" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default FeatureCard;
