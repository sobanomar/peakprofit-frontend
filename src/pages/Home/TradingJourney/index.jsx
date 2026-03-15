"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useMotionTemplate } from "framer-motion";
import {
  TrendingUp,
  Shield,
  Calendar,
  Target,
  DollarSign,
  ChevronRight,
  Loader2,
  Sparkles,
} from "lucide-react";
import axiosInstance from "../../../api/axios";
import MainHeading from "../../../components/MainHeading";
import ChallengeDetails from "./ChallengeDetails";
import ChallengeCard from "./ChallengeCard";
import LiquidGlassButton from "../../../components/ui/LiquidGlassButton";
import MobileChallengeSection from "./MobileChallengeSelector";

// --- Enhanced Animation Variants ---
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.3,
      ease: [0.25, 0.4, 0.25, 1],
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
    filter: "blur(4px)",
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
      mass: 0.8,
      duration: 0.6,
    },
  },
};

const detailsContainerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.2,
    },
  },
};

const detailItemVariants = {
  hidden: {
    opacity: 0,
    x: 20,
    scale: 0.95,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 120,
      damping: 18,
    },
  },
};

// --- Main Component ---
const TradingJourney = () => {
  const [challenges, setChallenges] = useState([]);
  const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleChallengeStart = () => {
    window.open(
      import.meta.env.VITE_DASHBOARD_URL +
        "/signup?challengeId=" +
        selectedChallenge._id,
      "_blank",
      "noopener,noreferrer",
    );
  };

  useEffect(() => {
    const fetchChallenges = async () => {
      try {
        setLoading(true);
        const response = await axiosInstance.get("/challenge/challenges");
        const challengesData = response.data.result.data;

        // Filter out test challenge and sort by account size
        const filteredChallenges = challengesData
          .filter((c) => !c.name.toLowerCase().includes("test"))
          .sort((a, b) => a.accountSize - b.accountSize);

        setChallenges(filteredChallenges);

        // Auto-select first challenge
        if (filteredChallenges.length > 0) {
          setSelectedChallenge(filteredChallenges[0]);
        }
      } catch (err) {
        setError(err.message);
        console.error("Error fetching challenges:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchChallenges();
  }, []);

  if (loading) {
    return (
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              <Loader2 className="w-8 h-8 text-brand-400" />
            </motion.div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center min-h-[400px]">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-400 text-center"
            >
              Unable to load challenges. Please try again later.
            </motion.p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-24 px-6 overflow-hidden">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-brand-900/10 via-transparent to-transparent" />

      {/* Animated gradient orbs */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.25, 0.4, 0.25, 1] }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-400/10 border border-brand-400/20 mb-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", stiffness: 200, damping: 15 }}
              className="rounded-full bg-brand-400/20 p-1.5 animate-pulse ring-1 ring-brand-400/30"
            >
              <motion.div
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.8, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-2 h-2  ring-1 ring-brand-400/30 bg-brand  rounded-full  shadow-lg shadow-brand-400/50"
              />
            </motion.div>
            <span className="text-sm font-medium text-brand-400">
              FUNDED TRADER PROGRAM
            </span>
          </motion.div>

          <MainHeading>YOUR PATH TO FUNDED TRADING</MainHeading>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center text-lg md:text-xl mb-8 text-zinc-400 leading-relaxed"
          >
            Choose your challenge, prove your skills, and transform into a{" "}
            <span className="font-bold text-white">
              professionally funded trader.
            </span>
            <br />
            Your trading career starts here.
          </motion.p>
        </motion.div>

        {/* Two Column Layout with Improved Height Management */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Left: Challenge List */}
          <motion.div
            data-lenis-prevent
            variants={containerVariants}
            data-lenis-prevent
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="space-y-4 max-h-[450px] md:max-h-[720px] lg:max-h-[650px] overflow-y-auto no-scrollbar pr-2 
                       overscroll-y-contain scrollbar-thin scrollbar-thumb-brand-400/20 scrollbar-track-transparent
                       hover:scrollbar-thumb-brand-400/40"
          >
            {challenges.map((challenge) => (
              <ChallengeCard
                key={challenge._id}
                challenge={challenge}
                isSelected={selectedChallenge?._id === challenge._id}
                onClick={setSelectedChallenge}
                cardVariants={cardVariants}
              />
            ))}
          </motion.div>

          {/* Right: Challenge Details - Sticky with Better Height */}
          <div
            data-lenis-prevent
            className="lg:sticky lg:top-24 overflow-y-auto overscroll-y-contain no-scrollbar"
          >
            {selectedChallenge ? (
              <ChallengeDetails
                handleChallengeStart={handleChallengeStart}
                challenge={selectedChallenge}
                detailsContainerVariants={detailsContainerVariants}
                detailItemVariants={detailItemVariants}
              />
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center min-h-[400px] text-zinc-500 space-y-4"
              >
                <Target className="w-16 h-16 text-zinc-700" />
                <p className="text-lg">Select a challenge to view details</p>
              </motion.div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center justify-center">
          <motion.div
            variants={detailItemVariants}
            className="pt-6 space-y-3 flex items-center justify-center"
          >
            <LiquidGlassButton
              width={400}
              onClick={handleChallengeStart}
              height={80}
              className="md:text-xl text-white mt-5 md:mt-10 hover:text-brand-900 lg:text-2xl w-60 sm:w-72 md:w-80 rounded-full lg:w-md h-14 lg:h-22 border border-white/10 hover:bg-brand font-extrabold shadow-xl shadow-brand-400/20 hover:shadow-2xl hover:shadow-brand-400/40 transition-all duration-300"
            >
              BEGIN CHALLENGE
            </LiquidGlassButton>
          </motion.div>
        </div>
      </div>

      <div className="flex md:hidden w-full">
        <MobileChallengeSection
          challenges={challenges}
          onChallengeStart={handleChallengeStart}
          selectedChallenge={selectedChallenge}
          setSelectedChallenge={setSelectedChallenge}
        />
      </div>
    </section>
  );
};

export default TradingJourney;
