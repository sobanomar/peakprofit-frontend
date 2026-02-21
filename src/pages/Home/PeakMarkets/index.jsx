import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import {
  Zap,
  LineChart,
  Eye,
  ShieldCheck,
  Users,
  Activity,
} from "lucide-react";
import TradingVideo from "../../../assets/videos/peakMarkets.mp4";
import { MacbookScroll } from "../../../components/ui/macbook-scroll";
import FeatureCard from "./FeatureCard";
import MainHeading from "../../../components/MainHeading";
import MobileHorizontalFeatures from "./MobileHorizontalFeatures";

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
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    layoutEffect: false,
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.0001,
    restSpeed: 0.0001,
  });

  // Calculate horizontal shift. "-80%" is an estimate;
  // it depends on how many items you have and their width.
  const x = useTransform(smoothProgress, [0, 1], ["0%", "-84%"]);
  return (
    <section
      ref={targetRef}
      className="relative w-full h-[400vh] md:h-auto  text-white"
    >
      {/* 2. THE STICKY BUCKET: Pins the content while scrolling on mobile */}
      <div className="sticky top-0 md:relative h-screen md:h-auto flex flex-col justify-center overflow-hidden px-6">
        <div className="relative max-w-7xl mx-auto w-full py-20">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-block py-1 px-4 mb-6 text-xs font-black tracking-[0.2em] text-brand-400 uppercase border border-brand-400/30 rounded-full bg-brand-400/5"
            >
              The Platform
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <MainHeading>PEAKMARKETS.</MainHeading>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-lg md:text-xl text-zinc-400 leading-relaxed mt-4"
            >
              The proprietary engine built exclusively for PeakProfit traders.
              <br />
              <span className="text-white font-bold">
                Faster execution. Deeper insights. Total transparency.
              </span>
            </motion.p>
          </div>

          {/* 3. DESKTOP GRID: Standard 3-column layout */}
          <div className="hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6 w-full">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} index={index} />
            ))}
          </div>

          {/* 4. MOBILE HORIZONTAL: Only visible and animated on small screens */}
          <div className="md:hidden flex">
            <motion.div
              style={{ x, willChange: "transform" }}
              className="flex gap-4 "
            >
              {features.map((feature, index) => (
                <div key={index} className="w-[85vw] sm:w-[65vw] shrink-0">
                  <FeatureCard feature={feature} />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* 5. MACBOOK SECTION: Appears after the scroll track on Desktop */}
      <div className="hidden lg:block w-full overflow-hidden">
        <MacbookScroll src={TradingVideo} />
      </div>
    </section>
  );
};

export default PeakMarkets;
