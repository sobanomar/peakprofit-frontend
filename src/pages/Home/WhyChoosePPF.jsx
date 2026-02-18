import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MainHeading from "../../components/MainHeading";

import {
  FaBullseye,
  FaRocket,
  FaMoneyCheckAlt,
  FaCalendarAlt,
  FaHeadset,
} from "react-icons/fa";
import { BsXDiamond } from "react-icons/bs";
import LiquidGlassButton from "../../components/ui/LiquidGlassButton";
import { navigateToSignup } from "../../utils/navigateToSignUp";

const features = [
  {
    icon: <FaBullseye />,
    title: "Realistic Targets",
    stat: "8%",
    statLabel: "Profit Target",
    description:
      "Our model has the most competitive and realistic targets in the market. A profit target of 8% is the lowest in the industry — giving you the best possible chance to reach funding and start earning.",
  },
  {
    icon: <FaRocket />,
    title: "Scaling Plan",
    stat: "$1M",
    statLabel: "Max Account Size",
    description:
      "We offer our Funded traders the ability to scale their account up to $1,000,000. Simply make 15% profit over 3 months and we'll double your allocation — no strings attached.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Quick and Reliable Rewards",
    stat: "12h",
    statLabel: "Avg. Processing",
    description:
      "At PeakProfit, we process Rewards swiftly and efficiently. We maintain robust reserves to guarantee smooth operations — because your money should move as fast as your trades.",
  },
  {
    icon: <BsXDiamond />,
    title: "Upto 85% Reward Split",
    stat: "85%",
    statLabel: "Max Trader Split",
    description:
      "Our traders receive an 85% reward split. You keep the lion's share — because you're the one doing the work.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Weekly Rewards",
    stat: "7",
    statLabel: "Day Pay Cycle",
    description:
      "We offer weekly Rewards as default, allowing traders to receive profits every 7 days. No more waiting a month to see your hard-earned returns.",
  },
  {
    icon: <FaHeadset />,
    title: "Customer Support",
    stat: "24/7",
    statLabel: "Always Available",
    description:
      "Our dedicated customer support team is available around the clock to assist with any inquiries or issues — real people, fast responses, no bots.",
  },
];

const WhyChoosePPF = () => {
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full py-12 md:py-24 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 lg:px-8">
        {/* Mobile Header */}
        <motion.div
          className="lg:hidden mb-12"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Built for <br />
            <span className="text-brand">serious traders.</span>
          </h2>
          <p className="text-zinc-400 text-base">
            The most trader-friendly conditions in the prop firm industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Left column ──
               RULE: sticky must be on the direct child of the grid cell.
               motion.div must be INSIDE the sticky div — never on it —
               because Framer's transform on entry breaks position:sticky.
          */}
          <div className="hidden lg:sticky lg:top-24 lg:block">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <h2 className="text-7xl font-bold text-white leading-tight mb-6">
                Built for <br />
                <span className="text-brand">serious traders.</span>
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
                PeakProfit Funding offers the most trader-friendly conditions in
                the prop firm industry.
              </p>

              <AnimatePresence mode="wait">
                <motion.div
                  key={open}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="mt-16"
                >
                  <div className="text-[120px] font-bold text-brand leading-none tracking-tighter">
                    {features[open].stat}
                  </div>
                  <div className="text-zinc-400 text-sm mt-2 uppercase tracking-[0.2em]">
                    {features[open].statLabel}
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex mt-8 lg:mt-16">
                <LiquidGlassButton
                  width={400}
                  onClick={navigateToSignup}
                  height={80}
                  className="md:text-xl text-white hover:text-brand-900 lg:text-2xl w-60 sm:w-72 md:w-80 rounded-full lg:w-md h-14 lg:h-22 border border-white/10 hover:bg-brand font-extrabold shadow-xl shadow-brand-400/20 hover:shadow-2xl hover:shadow-brand-400/40 transition-all duration-300"
                >
                  TRY IT OUT
                </LiquidGlassButton>
              </div>
            </motion.div>
          </div>

          {/* ── Right column ── */}
          <motion.div
            className="flex flex-col"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {features.map((f, i) => {
              const isActive = open === i;
              return (
                <div
                  key={i}
                  className={`border-b border-white/10 transition-colors duration-500 ${
                    isActive ? "border-brand/40" : ""
                  }`}
                >
                  <button
                    onClick={() => setOpen(i)}
                    className="w-full flex items-center justify-between py-6 md:py-8 bg-transparent text-left outline-none group"
                  >
                    <div className="flex items-center gap-4 md:gap-6">
                      <span
                        className={`text-xl md:text-2xl transition-all ${
                          isActive ? "text-brand" : "text-zinc-500"
                        }`}
                      >
                        {f.icon}
                      </span>
                      <span
                        className={`text-xl md:text-2xl font-bold ${
                          isActive ? "text-white" : "text-zinc-400"
                        }`}
                      >
                        {f.title}
                      </span>
                    </div>
                    <span
                      className={`text-2xl transition-colors ${
                        isActive ? "text-brand" : "text-zinc-500"
                      }`}
                    >
                      {isActive ? "−" : "+"}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        {/* Mobile stat */}
                        <div className="lg:hidden mb-6 pl-10 md:pl-12">
                          <div className="text-5xl font-bold text-brand">
                            {f.stat}
                          </div>
                          <div className="text-zinc-500 text-xs uppercase tracking-widest">
                            {f.statLabel}
                          </div>
                        </div>

                        <p className="text-zinc-400 text-base md:text-lg leading-relaxed pb-8 pl-10 md:pl-12 pr-4">
                          {f.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile CTA */}
        <div className="lg:hidden flex items-center w-full justify-center">
          <LiquidGlassButton
            width={400}
            onClick={navigateToSignup}
            height={80}
            className="md:text-xl mt-8 md:mt-16 text-white hover:text-brand-900 lg:text-2xl w-60 sm:w-72 md:w-80 rounded-full lg:w-md h-14 lg:h-22 border border-white/10 hover:bg-brand font-extrabold shadow-xl shadow-brand-400/20 hover:shadow-2xl hover:shadow-brand-400/40 transition-all duration-300"
          >
            TRY IT OUT
          </LiquidGlassButton>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePPF;
