import { ChevronRight } from "lucide-react";
import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";

const ChallengeCard = ({ challenge, isSelected, onClick, cardVariants }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      variants={cardVariants}
      onClick={() => onClick(challenge)}
      onMouseMove={handleMouseMove}
      whileTap={{ scale: 0.95 }}
      className={`group relative cursor-pointer rounded-2xl border p-6 transition-all duration-500 transform-gpu will-change-transform ${
        isSelected
          ? "border-brand-400/60 bg-gradient-to-br  from-brand-400/10 via-brand-400/5 to-purple-500/5 shadow-lg shadow-brand-400/30"
          : "border-white/10 hover:border-purple-500/40 hover:bg-white/[0.03] hover:shadow-xl hover:shadow-purple-500/10"
      }`}
    >
      {/* Enhanced Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(168, 85, 247, 0.15),
              rgba(147, 51, 234, 0.08) 40%,
              transparent 80%
            )
          `,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white group-hover:text-brand-400 transition-colors duration-300">
            {challenge.name}
          </h3>
          {isSelected && (
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="rounded-full bg-brand-400/20 p-1.5 animate-pulse ring-2 ring-brand-400/30"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2 rounded-full bg-brand-400 shadow-lg shadow-brand-400/50"
              />
            </motion.div>
          )}
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">Account Size</span>
            <span className="text-base font-semibold text-white group-hover:text-brand-300 transition-colors">
              ${challenge.accountSize.toLocaleString()}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-zinc-400">Entry Fee</span>
            <span className="text-base font-semibold text-brand-400 group-hover:text-brand-300 transition-colors">
              ${challenge.cost.toFixed(2)}
            </span>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="flex items-center justify-end text-brand-400 text-sm font-medium group-hover:translate-x-1 transition-transform duration-300">
            Explore Challenge
            <ChevronRight size={16} className="ml-1" />
          </div>
        </div>

        <div className="mt-4 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: isSelected ? "100%" : "0%" }}
            whileHover={{ width: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="h-0.5 bg-gradient-to-r from-brand-400 via-purple-500 to-pink-500"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default ChallengeCard;
