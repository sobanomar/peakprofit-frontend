import React from "react";
import { FaCircle } from "react-icons/fa";
import { motion } from "framer-motion";

const InfoCard = ({
  topContent,
  isImage = false,
  title,
  description,
  bottomContent,
  align = "center",
  status,
}) => {
  // Use the same variants for consistency across your grid
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="relative group bg-gradient-to-b from-white/[0.08] w-full to-transparent backdrop-blur-md border border-white/10 p-8 rounded-3xl shadow-2xl text-white  transition-all duration-300 hover:border-purple-500/50"
    >
      {/* Background Glow matching the StatCard style */}
      <div className="absolute -top-4 -right-4 bg-white/5 p-8 rounded-full blur-2xl  group-hover:bg-white/10 transition-colors" />

      <div
        className={`flex ${
          align === "left"
            ? "justify-start text-left"
            : "justify-center text-center"
        } flex-col mb-4 relative z-10`}
      >
        {isImage ? (
          <div className="relative mb-4">
            {status && (
              <div
                className={`flex ${align === "left" ? "justify-start" : "justify-center"} mb-3`}
              >
                <span className="text-green-400 text-xs font-bold uppercase tracking-widest gap-2 flex items-center bg-green-400/10 px-3 py-1 rounded-full border border-green-400/20">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                  </span>
                  {status}
                </span>
              </div>
            )}
            <img
              src={topContent}
              alt={title}
              className={`h-16 object-contain group-hover:scale-105 transition-transform duration-500 ${align === "left" ? "ml-0" : "mx-auto"}`}
            />
          </div>
        ) : (
          <div className="text-5xl font-mono font-bold text-transparent mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text ">
            {topContent}
          </div>
        )}

        <div className="space-y-2">
          <h3 className="text-2xl font-bold tracking-tight">{title}</h3>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            {description}
          </p>
        </div>
      </div>

      {bottomContent && (
        <div
          className={`mt-6 flex ${align === "left" ? "justify-start" : "justify-center"} relative z-10`}
        >
          {bottomContent}
        </div>
      )}
    </motion.div>
  );
};

export default InfoCard;
