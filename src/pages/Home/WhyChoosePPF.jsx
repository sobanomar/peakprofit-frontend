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
  // Default to 0 so the first item is open on mount
  const [open, setOpen] = useState(0);

  return (
    <section className="w-full py-12 md:py-24 flex flex-col items-center ">
      <div className="max-w-7xl w-full px-6 lg:px-8">
        {/* Mobile Header (Hidden on Desktop) */}
        <div className="lg:hidden mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
            Built for <br />
            <span className="text-brand">serious traders.</span>
          </h2>
          <p className="text-zinc-400 text-base">
            The most trader-friendly conditions in the prop firm industry.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* ── Desktop Left Side (Hidden on Mobile) ── */}
          <div className="hidden lg:block lg:sticky lg:top-24">
            <h2 className="text-7xl font-bold text-white leading-tight mb-6">
              Built for <br />
              <span className="text-brand">serious traders.</span>
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed max-w-md">
              PeakProfit Funding offers the most trader-friendly conditions in
              the prop industry.
            </p>

            <AnimatePresence mode="wait">
              <motion.div
                key={open}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
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
          </div>

          {/* ── Right Side: Mobile-Adaptive Accordion ── */}
          <div className="flex flex-col">
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
                        className={`text-xl md:text-2xl transition-all ${isActive ? "text-brand" : "text-zinc-500"}`}
                      >
                        {f.icon}
                      </span>
                      <span
                        className={`text-xl md:text-2xl font-bold ${isActive ? "text-white" : "text-zinc-400"}`}
                      >
                        {f.title}
                      </span>
                    </div>
                    <span
                      className={`text-2xl transition-colors ${isActive ? "text-brand" : "text-zinc-500"}`}
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
                        {/* Mobile Stat (Visible ONLY on mobile/tablet) */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePPF;
