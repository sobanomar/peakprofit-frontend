import React from "react";
import LiquidGlassButton from "../../../components/ui/LiquidGlassButton";
import { motion } from "framer-motion";
import { TrendingUp, Shield, Calendar, Target, DollarSign } from "lucide-react";
const ChallengeDetails = ({
  challenge,
  handleChallengeStart,
  detailsContainerVariants,
  detailItemVariants,
}) => {
  const details = [
    {
      icon: DollarSign,
      label: "Account Size",
      value: `$${challenge.accountSize.toLocaleString()}`,
      subtitle: "Virtual capital to trade with",
      color: "from-emerald-500 to-green-600",
    },
    {
      icon: Target,
      label: "Profit Target",
      value: `$${(challenge.accountSize * 0.08).toLocaleString()}`,
      subtitle: "8% gain to qualify for funding",
      color: "from-brand-400 to-purple-600",
    },
    {
      icon: Shield,
      label: "Daily Loss Limit",
      value: `$${(challenge.accountSize * 0.025).toLocaleString()}`,
      subtitle: "2.5% maximum daily drawdown",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: TrendingUp,
      label: "Total Loss Limit",
      value: `$${(challenge.accountSize * 0.07).toLocaleString()}`,
      subtitle: "7% maximum overall drawdown",
      color: "from-rose-500 to-red-600",
    },
    {
      icon: Calendar,
      label: "Trading Period",
      value: "3 Days",
      subtitle: "Minimum trading days required",
      color: "from-blue-500 to-indigo-600",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={detailsContainerVariants}
      className="space-y-6"
    >
      <motion.div variants={detailItemVariants} className="space-y-3">
        <div className="flex items-center gap-2 mb-2">
          <h3 className="text-3xl font-bold bg-gradient-to-r from-white via-brand-200 to-white bg-clip-text text-transparent">
            {challenge.name}
          </h3>
        </div>
        <p className="text-lg text-zinc-400 leading-relaxed">
          Prove your trading expertise in real market conditions. Successfully
          complete this challenge to unlock{" "}
          <span className="font-semibold text-brand-300">
            a fully funded trading account
          </span>{" "}
          and keep up to{" "}
          <span className="font-semibold text-brand-300">90% of profits</span>.
        </p>
      </motion.div>

      <motion.div variants={detailsContainerVariants} className="space-y-3">
        {details.map((detail, index) => {
          const Icon = detail.icon;
          return (
            <motion.div
              key={index}
              variants={detailItemVariants}
              className="group relative rounded-xl border border-white/10 p-5 bg-gradient-to-br from-white/[0.03] to-white/[0.01] hover:border-purple-500/30 hover:bg-white/[0.05] transition-all duration-300 overflow-hidden"
            >
              {/* Gradient background on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${detail.color} opacity-5`}
                />
              </div>

              <div className="flex items-start gap-4 relative z-10">
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  transition={{ duration: 0.6 }}
                  className={`rounded-lg bg-gradient-to-br ${detail.color} p-2.5 text-white ring-1 ring-white/20 shadow-lg`}
                >
                  <Icon size={20} strokeWidth={2} />
                </motion.div>
                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-1">
                    <span className="text-base font-semibold text-white group-hover:text-white transition-colors">
                      {detail.label}
                    </span>
                    <span className="text-xl font-bold text-white group-hover:text-brand-300 transition-colors duration-300">
                      {detail.value}
                    </span>
                  </div>
                  {detail.subtitle && (
                    <p className="text-xs text-zinc-500 group-hover:text-zinc-400 transition-colors">
                      {detail.subtitle}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      <motion.div
        variants={detailItemVariants}
        className="pt-6 space-y-3 flex items-center justify-center"
      >
        <LiquidGlassButton
          width={400}
          onClick={handleChallengeStart}
          height={80}
          className="md:text-xl text-white hover:text-brand-900 lg:text-2xl w-60 sm:w-72 md:w-80 rounded-full lg:w-md h-14 lg:h-22 border border-white/10 hover:bg-brand font-extrabold shadow-xl shadow-brand-400/20 hover:shadow-2xl hover:shadow-brand-400/40 transition-all duration-300"
        >
          BEGIN CHALLENGE
        </LiquidGlassButton>
      </motion.div>
    </motion.div>
  );
};

export default ChallengeDetails;
