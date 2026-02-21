import { useState, useRef, useEffect } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useTransform,
  animate,
} from "framer-motion";
import {
  ChevronRight,
  DollarSign,
  Target,
  Shield,
  TrendingUp,
  Calendar,
  X,
  Zap,
} from "lucide-react";
import LiquidGlassButton from "../../../components/ui/LiquidGlassButton";

const getDetails = (challenge) => [
  {
    icon: DollarSign,
    label: "Account Size",
    value: `$${challenge.accountSize.toLocaleString()}`,
    color: "#10b981",
  },
  {
    icon: Target,
    label: "Profit Target (8%)",
    value: `$${(challenge.accountSize * 0.08).toLocaleString()}`,
    color: "#a78bfa",
  },
  {
    icon: Shield,
    label: "Daily Loss Limit (2.5%)",
    value: `$${(challenge.accountSize * 0.025).toLocaleString()}`,
    color: "#f97316",
  },
  {
    icon: TrendingUp,
    label: "Total Drawdown (7%)",
    value: `$${(challenge.accountSize * 0.07).toLocaleString()}`,
    color: "#ef4444",
  },
  {
    icon: Calendar,
    label: "Min. Trading Days",
    value: "3 Days",
    color: "#3b82f6",
  },
];

// ─── ChallengeCard ─────────────────────────────────────────────────────────────
function ChallengeCard({ challenge, isSelected, onClick }) {
  return (
    <motion.button
      onClick={() => onClick(challenge)}
      whileTap={{ scale: 0.97 }}
      className={`w-full text-left rounded-2xl p-4 border transition-all duration-300 relative overflow-hidden ${
        isSelected
          ? "border-violet-400/60 bg-violet-500/10"
          : "border-white/10 bg-white/[0.03] active:bg-white/[0.06]"
      }`}
    >
      {isSelected && (
        <motion.div
          layoutId="selected-bg"
          className="absolute inset-0 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10"
        />
      )}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isSelected ? (
            <div className="rounded-full bg-brand-400/20 p-1.5 ring-1 ring-brand-400/30">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-2 h-2 rounded-full animate-pulse bg-brand-400 shadow-lg shadow-violet-400/50"
              />
            </div>
          ) : (
            <div className="w-2 h-2 rounded-full bg-white/20" />
          )}
          <div>
            <p
              className={`font-bold text-base ${isSelected ? "text-white" : "text-zinc-400"}`}
            >
              {challenge.name}
            </p>
            <p className="text-zinc-400 text-xs mt-0.5">
              ${challenge.accountSize.toLocaleString()} account
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-sm font-bold ${isSelected ? "text-violet-300" : "text-zinc-400"}`}
          >
            ${challenge.cost}
          </span>
          <ChevronRight
            size={16}
            className={`transition-transform duration-300 ${isSelected ? "text-violet-400 translate-x-0.5" : "text-zinc-400"}`}
          />
        </div>
      </div>

      {/* Selected state bottom bar */}
      {isSelected && (
        <motion.div
          layoutId="selected-bar"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400"
        />
      )}
    </motion.button>
  );
}

// ─── Bottom Sheet ──────────────────────────────────────────────────────────────
function BottomSheet({ challenge, onClose, onStart }) {
  const details = getDetails(challenge);

  // 1. Scroll Lock: Prevent background scrolling when mounted
  useEffect(() => {
    // Save original overflow style
    const originalStyle = window.getComputedStyle(document.body).overflow;
    document.body.style.overflow = "hidden";

    // Re-enable scrolling when unmounted
    return () => {
      document.body.style.overflow = originalStyle;
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-end justify-center"
    >
      {/* 2. Backdrop/Overlay: 
          - Captures clicks to close
          - backdrop-blur-sm adds premium feel
          - inset-0 ensures it covers the full viewport */}
      <motion.div
        initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
        animate={{ opacity: 1, backdropFilter: "blur(8px)" }}
        exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
        transition={{ duration: 0.45, ease: "easeIn" }}
        onClick={onClose}
        className="absolute inset-0 bg-black/60 pointer-events-auto"
      />

      {/* 3. The Sheet: 
          - stopPropagation prevents clicks on the sheet from closing it 
          - pointer-events-auto ensures the sheet itself remains interactive */}
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ type: "spring", stiffness: 300, damping: 32 }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full bg-[#150128] border-t border-white/10 rounded-t-3xl overflow-hidden z-10 max-h-[90vh] flex flex-col pointer-events-auto"
      >
        {/* Drag handle */}
        <div className="flex justify-center pt-3 pb-1 flex-shrink-0">
          <div className="w-10 h-1 rounded-full bg-white/20" />
        </div>

        {/* Header */}
        <div className="px-5 pt-3 pb-4 flex items-start justify-between flex-shrink-0">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Zap size={14} className="text-violet-400" />
              <span className="text-xs font-semibold text-violet-400 uppercase tracking-wider">
                Challenge Details
              </span>
            </div>
            <h2 className="text-2xl font-black text-white">{challenge.name}</h2>
            <p className="text-zinc-400 text-sm mt-0.5">
              ${challenge.accountSize.toLocaleString()} account
            </p>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-white/10 p-2 text-zinc-400 active:bg-white/20 transition-colors"
          >
            <X size={16} />
          </button>
        </div>

        {/* Scrollable content */}
        <div className="flex-1 overflow-y-auto px-5 pb-4 custom-scrollbar">
          <p className="text-zinc-400 text-sm leading-relaxed mb-5">
            Prove your trading expertise in real market conditions. Pass this
            challenge to unlock a{" "}
            <span className="text-white font-bold">fully funded account</span>{" "}
            and keep up to{" "}
            <span className="text-brand font-semibold">85% of profits</span>.
          </p>

          {/* Details grid */}
          <div className="space-y-2.5">
            {details.map((d, i) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center justify-between rounded-xl bg-white/[0.04] border border-white/[0.06] px-4 py-3"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="rounded-lg p-1.5"
                      style={{ background: `${d.color}20`, color: d.color }}
                    >
                      <Icon size={15} strokeWidth={2.5} />
                    </div>
                    <span className="text-zinc-400 text-sm">{d.label}</span>
                  </div>
                  <span className="text-white font-bold text-sm">
                    {d.value}
                  </span>
                </motion.div>
              );
            })}
          </div>

          {/* Profit split callout */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-4 rounded-2xl overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(236, 72, 153, 0.1))",
              border: "1px solid rgba(139, 92, 246, 0.25)",
            }}
          >
            <div className="px-4 py-3 flex items-center gap-3">
              <div className="text-3xl font-black text-white">85%</div>
              <div>
                <p className="text-white text-sm font-semibold">Profit Split</p>
                <p className="text-zinc-400 text-xs">
                  Keep 85% of every dollar you earn
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Sticky CTA */}
        <div className="px-5 pt-3 pb-6 flex-shrink-0 bg-gradient-to-t from-[#150128] flex items-center flex-col to-transparent">
          <LiquidGlassButton
            width={400}
            onClick={() => onStart(challenge._id)}
            height={80}
            className="md:text-xl mt-4 text-white hover:text-brand-900 lg:text-2xl w-full sm:w-72 md:w-80 rounded-full h-14 border border-white/10 hover:bg-brand font-extrabold shadow-xl shadow-brand-400/20 hover:shadow-2xl hover:shadow-brand-400/40 transition-all duration-300"
          >
            BEGIN CHALLENGE
          </LiquidGlassButton>
          <p className="text-center text-zinc-400 text-xs mt-3 uppercase tracking-widest">
            Secure Checkout · Instant Access
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function MobileChallengeSection({
  challenges,
  onChallengeStart,
  selectedChallenge,
  setSelectedChallenge,
}) {
  //   const [selectedChallenge, setSelectedChallenge] = useState(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  const handleCardClick = (challenge) => {
    setSelectedChallenge(challenge);
    setSheetOpen(true);
  };

  const handleClose = () => setSheetOpen(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="w-full "
    >
      {/* Challenges list */}
      <div className="space-y-3 mx-auto">
        <p className="text-zinc-400 text-xl uppercase tracking-widest font-semibold mb-2 px-1">
          Select a Challenge
        </p>
        {challenges.map((challenge) => (
          <ChallengeCard
            key={challenge._id}
            challenge={challenge}
            isSelected={selectedChallenge?._id === challenge._id}
            onClick={handleCardClick}
          />
        ))}
      </div>

      {/* Bottom Sheet */}
      <AnimatePresence>
        {sheetOpen && selectedChallenge && (
          <BottomSheet
            challenge={selectedChallenge}
            onClose={handleClose}
            onStart={onChallengeStart}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
}
