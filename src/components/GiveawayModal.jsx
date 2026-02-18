import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigateToSignup } from "../utils/navigateToSignUp";

const TOTAL_USERS = 10000;
const CURRENT_USERS = 7420; // 74.2%

const STORAGE_KEY = "peak_profit_giveaway_meta";
const WAIT_TIME = 10000; // 30 seconds
const COOLDOWN_MINUTES = 30;
const MAX_DISMISSALS = 10; // Stop forever after 5 closes

export default function GiveawayModal() {
  // 1. All State at the top
  const [open, setOpen] = useState(false); // Start false for the timer
  const [progress, setProgress] = useState(0);

  // 2. Logic Effect (Runs once on mount)
  useEffect(() => {
    const rawData = localStorage.getItem(STORAGE_KEY);
    const now = Date.now();

    let meta = rawData
      ? JSON.parse(rawData)
      : {
          lastSeen: 0,
          dismissCount: 0,
          hasConverted: false,
        };

    const cooldownMs = COOLDOWN_MINUTES * 60 * 1000;
    const isLeveledOut = meta.dismissCount >= MAX_DISMISSALS;
    const isCoolingDown = now - meta.lastSeen < cooldownMs;

    if (!meta.hasConverted && !isLeveledOut && !isCoolingDown) {
      const timer = setTimeout(() => {
        setOpen(true);
        meta.lastSeen = Date.now();
        localStorage.setItem(STORAGE_KEY, JSON.stringify(meta));
      }, WAIT_TIME);

      return () => clearTimeout(timer);
    }
  }, []);

  // 3. Scroll Locking Effect (Must be before any return)
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  // 4. Progress Animation Effect (Must be before any return)
  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        setProgress((CURRENT_USERS / TOTAL_USERS) * 100);
      }, 600);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Handlers
  const handleClose = () => {
    setOpen(false);
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (rawData) {
      const meta = JSON.parse(rawData);
      meta.dismissCount += 1;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(meta));
    }
  };

  const handleAction = () => {
    const rawData = localStorage.getItem(STORAGE_KEY);
    if (rawData) {
      const meta = JSON.parse(rawData);
      meta.hasConverted = true;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(meta));
    }
    setOpen(false);
    navigateToSignup();
  };

  // 5. THE FIX: Only return null at the very end of the logic block
  if (!open) return null;

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed z-[250] inset-0 flex items-center justify-center  bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            onClick={handleClose}
          >
            <div
              className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-2xl"
              style={{
                background:
                  "linear-gradient(135deg, #1a1035 0%, #1e1245 40%, #160d30 100%)",
                border: "1px solid rgba(139, 92, 246, 0.25)",
                boxShadow:
                  "0 0 60px rgba(109, 40, 217, 0.3), 0 25px 50px rgba(0,0,0,0.6)",
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top glow line */}
              <div
                className="absolute top-0 left-0 right-0 h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent, rgba(167,139,250,0.8), transparent)",
                }}
              />

              {/* Ambient glow */}
              <div
                className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-40 rounded-full opacity-20 pointer-events-none"
                style={{
                  background: "radial-gradient(circle, #7c3aed, transparent)",
                  filter: "blur(30px)",
                }}
              />

              <div className="relative p-6">
                {/* Header row */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-3">
                    {/* Logo chip */}
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center text-white font-black text-xs"
                      style={{
                        background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                      }}
                    >
                      <img src="/logo/PeakProfitLogo.png" alt="logo" />
                    </div>
                    {/* Badge */}
                    <div
                      className="flex text-sm items-center gap-1.5 px-3 py-1 rounded-full  font-semibold text-purple-200"
                      style={{
                        background: "rgba(124, 58, 237, 0.2)",
                        border: "1px solid rgba(167, 139, 250, 0.3)",
                      }}
                    >
                      <span>PeakProfit Giveaway</span>
                    </div>
                  </div>
                  <button
                    onClick={handleClose}
                    className="text-zinc-400 hover:text-white transition-colors w-7 h-7 flex items-center justify-center rounded-full hover:bg-white/10"
                  >
                    ✕
                  </button>
                </div>

                {/* Title */}
                <motion.h2
                  className="text-2xl font-black text-white leading-tight mb-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.5 }}
                >
                  Want to win a{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #a78bfa, #818cf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    $500,000 funded account
                  </span>{" "}
                  +{" "}
                  <span
                    style={{
                      background: "linear-gradient(90deg, #a78bfa, #818cf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    $10,000 cash?
                  </span>
                </motion.h2>

                <motion.p
                  className="text-zinc-400 text-sm leading-relaxed mb-5"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22, duration: 0.5 }}
                >
                  Sign up in the client portal and you're automatically entered.
                  The giveaway takes place when PeakProfit hits{" "}
                  <strong className="text-white font-bold">
                    10,000 users.
                  </strong>
                </motion.p>

                {/* Prize card */}
                <motion.div
                  className="rounded-xl p-4 mb-4"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(139, 92, 246, 0.2)",
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {/* Prize pack label */}
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-amber-400 text-sm">🏆</span>
                    <span className="text-white text-sm font-bold tracking-wide">
                      Prize Pack
                    </span>
                  </div>

                  {/* Prize rows */}
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold text-sm">
                        $500,000 Funded Account
                      </span>
                      <span className="text-zinc-400 text-xs">
                        Top-tier capital
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold text-sm">
                        $10,000 Cash
                      </span>
                      <span className="text-zinc-400 text-xs">
                        Instant payout
                      </span>
                    </div>
                  </div>

                  {/* Progress */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-zinc-400 text-xs">
                        Progress to 10,000 users (demo)
                      </span>
                      <span className="text-violet-300 text-xs font-bold">
                        {((CURRENT_USERS / TOTAL_USERS) * 100).toLocaleString()}
                        %
                      </span>
                    </div>
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <motion.div
                        className="h-full rounded-full"
                        style={{
                          background:
                            "linear-gradient(90deg, #5b21b6, #7c3aed, #8b5cf6, #a78bfa)",
                          boxShadow: "0 0 12px rgba(139, 92, 246, 0.7)",
                        }}
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{
                          delay: 0.6,
                          duration: 1.2,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* CTAs */}
                <motion.div
                  className="space-y-3"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  <button
                    className="w-full py-3.5 rounded-xl font-bold text-white text-sm tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                    style={{
                      background:
                        "linear-gradient(135deg, #7c3aed 0%, #6d28d9 50%, #5b21b6 100%)",
                      boxShadow:
                        "0 4px 24px rgba(109, 40, 217, 0.5), inset 0 1px 0 rgba(255,255,255,0.15)",
                    }}
                    onClick={() => {
                      navigateToSignup();
                      handleAction();
                    }}
                  >
                    Sign Up in Client Portal ↗
                  </button>

                  <button
                    className="w-full py-3.5 rounded-xl hover:scale-[1.02] font-semibold text-zinc-300 text-sm tracking-wide transition-all duration-300 hover:text-white hover:border-violet-500/50"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                    onClick={() => {
                      navigateToSignup();
                      handleAction();
                    }}
                  >
                    Already have an account? Log in →
                  </button>
                </motion.div>

                {/* Footer */}
                <motion.div
                  className="mt-5 flex text-xs items-center justify-between"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.5 }}
                >
                  <span className="text-zinc-400 ">
                    No purchase necessary. <br />
                    Winner announced live once 10,000 users is reached.
                  </span>
                </motion.div>

                <div className="mt-3 text-xs flex items-center justify-between">
                  <span className="text-white  font-bold">
                    PeakProfit Funding
                  </span>
                  <span className="text-zinc-400 ">
                    Milestone giveaway at 10,000 users
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
          {/* </div> */}
        </>
      )}
    </AnimatePresence>
  );
}
