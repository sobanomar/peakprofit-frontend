"use client";

import React from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  Zap,
  LineChart,
  Eye,
  ShieldCheck,
  Users,
  Activity,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";
import TradingVideo from "../../../assets/videos/DashboardTrading.mp4";
import { MacbookScroll } from "../../../components/ui/macbook-scroll";
import { Link } from "react-router";
import FeatureCard from "./FeatureCard";

// --- Components ---

// --- Data & Variants ---

const features = [
  {
    title: "Ultra-Low Latency Execution",
    description:
      "Fast, stable order execution optimized for active trading. No artificial delays or execution throttling.",
    icon: Zap,
  },
  {
    title: "Professional Charting Suite",
    description:
      "Advanced charting with multiple timeframes and core technical indicators for real-time market analysis.",
    icon: LineChart,
  },
  {
    title: "Full Rule Transparency",
    description:
      "Live drawdown tracking and profit targets are always visible directly within the platform interface.",
    icon: Eye,
  },
  {
    title: "Automated Risk Guardrails",
    description:
      "Built-in risk controls help enforce discipline and protect account parameters throughout all trading sessions.",
    icon: ShieldCheck,
  },
  {
    title: "Unified Trading Environment",
    description:
      "The same platform, rules, and execution experience from Challenge to Funded accounts.",
    icon: Users,
  },
  {
    title: "High-Availability Infrastructure",
    description:
      "Reliable, cloud-based infrastructure designed to remain stable during volatile and high-volume market conditions.",
    icon: Activity,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08, // Faster stagger for snappier feel
      delayChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 15, // Reduced distance for smoother arrival
    scale: 0.98,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 80, // Lower stiffness = less "jerk"
      damping: 15, // Higher damping = less oscillation
      mass: 1,
    },
  },
};

// --- Main Component ---

const PeakMarkets = () => {
  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center  px-6 text-white">
      <div className="relative max-w-7xl  ">
        <div className="text-center   ">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="inline-block py-1 px-4 mb-6 text-xs font-black tracking-[0.2em] text-brand-400 uppercase border border-brand-400/30 rounded-full bg-brand-400/5"
          >
            The Platform
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-7xl font-black tracking-tighter mb-8 bg-linear-to-b from-white to-zinc-500 bg-clip-text text-transparent"
          >
            PEAKMARKETS.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-lg md:text-xl mb-8 text-zinc-400 leading-relaxed"
          >
            The proprietary engine built exclusively for PeakProfit traders.
            <br />
            <span className="text-white font-bold">
              Faster execution. Deeper insights. Total transparency.
            </span>
          </motion.p>
        </div>

        {/* Grid Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full"
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              cardVariants={cardVariants}
              feature={feature}
              index={index}
            />
          ))}
        </motion.div>
      </div>
      <MacbookScroll src={TradingVideo} />
    </section>
  );
};

export default PeakMarkets;
