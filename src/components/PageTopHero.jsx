import React from "react";
import { motion } from "framer-motion";
import InteractiveGlowingBg from "./InteractiveGlowingBg";

const PageTopHero = ({
  icon: Icon,
  title = "PEAKPROFIT FUNDING™",
  subtitle,
  description,
  badgeText,
  className = "",
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative isolate z-10 border-b-[0.5px] border-white/10 bg-gradient-to-br from-brand-800/30 via-[#1c0d37] to-[#130025] pt-20 ${className}`}
    >
      <InteractiveGlowingBg opacity={0.3} />
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-8 sm:py-12 sm:px-6 lg:px-8 ">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
          {Icon ? (
            <Icon className="h-12 w-12 text-brand flex-shrink-0" />
          ) : null}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white break-words">
            {title}
          </h1>
        </div>

        {subtitle ? (
          <p className="text-lg sm:text-xl text-white/85 mb-2">{subtitle}</p>
        ) : null}

        {description ? (
          <p className="text-xs sm:text-sm text-brand-200/90 mb-4">
            {description}
          </p>
        ) : null}

        {badgeText ? (
          <div className="inline-block rounded-lg border border-brand-400/30 bg-brand-400/10 px-3 py-2 sm:px-4 text-xs sm:text-sm text-brand-100 backdrop-blur-sm">
            {badgeText}
          </div>
        ) : null}
      </div>
    </motion.div>
  );
};

export default PageTopHero;
