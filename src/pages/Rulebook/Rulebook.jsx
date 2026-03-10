import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronDown } from "lucide-react";
import { rulebookData } from "../../lib/RulebookData";
import { Link } from "react-router";

function InfoBox({ type = "info", children }) {
  const styles = {
    info: "bg-brand-400/10 border-brand-400/30 text-brand-100",
    success: "bg-emerald-400/10 border-emerald-300/30 text-emerald-100",
    warning: "bg-amber-400/10 border-amber-300/30 text-amber-100",
    danger: "bg-rose-400/10 border-rose-300/30 text-rose-100",
    text: "rounded-xl border border-white/10 bg-white/[0.03] p-3 sm:p-4 text-white/75",
  };

  return type === "text" ? (
    <div className={styles[type]}>{children}</div>
  ) : (
    <div className={`rounded-xl border p-3 sm:p-4 ${styles[type]}`}>
      {children}
    </div>
  );
}

function RuleStatCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-xl border border-white/10 bg-black/20 p-4 sm:p-4  backdrop-blur-sm">
      <div className="flex items-center gap-2 sm:gap-3">
        <Icon className="h-5 w-5 text-brand flex-shrink-0" />
        <span className="text-sm font-medium text-white/65 truncate">
          {label}
        </span>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-white">{value}</div>
    </div>
  );
}

function ContentBlock({
  type,
  title,
  icon,
  description,
  items,
  gridItems,
  secondaryItems,
  note,
}) {
  const ContentIcon = icon;

  return (
    <InfoBox type={type}>
      <div className="space-y-2">
        {title && (
          <p className="font-semibold flex items-start sm:items-center gap-2 text-sm sm:text-base text-white">
            {ContentIcon && (
              <ContentIcon className="h-4 w-4 text-brand-300 flex-shrink-0 mt-0.5 sm:mt-0" />
            )}
            <span className="break-words">{title}</span>
          </p>
        )}

        {description && (
          <p className="text-xs sm:text-sm text-white/80 break-words">
            {description}
          </p>
        )}

        {items && (
          <ul className="ml-4 sm:ml-6 space-y-1 text-xs sm:text-sm text-white/75 list-disc marker:text-brand-300/80">
            {items.map((item, idx) => (
              <li key={idx} className="break-words">
                {item}
              </li>
            ))}
          </ul>
        )}

        {gridItems && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-white/75">
            {gridItems.map((column, colIdx) => (
              <ul
                key={colIdx}
                className="ml-4 sm:ml-6 space-y-1 list-disc marker:text-brand-300/80"
              >
                {column.map((item, idx) => (
                  <li key={idx} className="break-words">
                    {item}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        )}

        {secondaryItems && (
          <ul className="ml-4 sm:ml-6 space-y-1 text-xs sm:text-sm text-white/75 list-disc marker:text-brand-300/80">
            {secondaryItems.map((item, idx) => (
              <li key={idx} className="break-words">
                {item}
              </li>
            ))}
          </ul>
        )}

        {note && (
          <p className="text-xs sm:text-sm mt-2 font-medium text-brand-100 break-words">
            {note}
          </p>
        )}
      </div>
    </InfoBox>
  );
}

function DrawerContent({ children }) {
  return (
    <motion.div
      key="drawer"
      initial="collapsed"
      animate="open"
      exit="collapsed"
      variants={{
        open: {
          height: "auto",
          opacity: 1,
          transition: {
            height: { duration: 0.35, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.25, ease: "easeOut" },
          },
        },
        collapsed: {
          height: 0,
          opacity: 0,
          transition: {
            height: { duration: 0.3, ease: [0.4, 0, 0.2, 1] },
            opacity: { duration: 0.15, ease: "easeIn" },
          },
        },
      }}
      style={{ overflow: "hidden" }}
    >
      <div className="p-4 sm:p-6 pt-0 space-y-4">{children}</div>
    </motion.div>
  );
}

function RuleSection({ section, isExpanded, onToggle }) {
  const Icon = section.icon;

  return (
    <div className="overflow-hidden rounded-2xl border border-brand/10 bg-brand/[0.04] shadow-[0_24px_60px_-50px_rgba(51,228,246,0.75)] backdrop-blur-sm">
      <button
        onClick={() => onToggle(section.id)}
        className="w-full flex items-center justify-between cursor-pointer p-4 sm:p-6 text-left hover:bg-brand/[0.05] transition-colors"
      >
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <Icon className="h-6 w-6 text-brand flex-shrink-0" />
          <h2 className="text-base sm:text-xl font-bold text-white">
            {section.title}
          </h2>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <ChevronDown className="h-5 w-5 text-brand-200/80" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <DrawerContent>
            {section.stats && (
              <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {section.stats.map((stat, idx) => (
                  <RuleStatCard key={idx} {...stat} />
                ))}
              </div>
            )}

            {section.content.map((item, idx) => (
              <ContentBlock key={idx} {...item} />
            ))}
          </DrawerContent>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Rulebook() {
  const [expandedSections, setExpandedSections] = useState(["demo"]);

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute -left-72 top-20 z-0 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-72 top-1/3 z-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-[140px]" />

      <div className="absolute theme-ambient-glow -right-80 -top-80 opacity-40 z-50" />
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 border-y  border-white/10 bg-gradient-to-br from-brand-800/30 via-[#1c0d37] to-[#130025] pt-20"
      >
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <Shield className="h-12 w-12 text-brand flex-shrink-0" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white break-words">
              PEAKPROFIT FUNDING™
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-white/85 mb-2">
            Official Master Rulebook
          </p>
          <p className="text-xs sm:text-sm text-brand-200/90 mb-4">
            Risk Disclosures & Platform Terms
          </p>

          <div className="inline-block rounded-lg border border-brand-400/30 bg-brand-400/10 px-3 py-2 sm:px-4 text-xs sm:text-sm text-brand-100 backdrop-blur-sm">
            Effective Immediately — All Traders Are Bound by These Terms
          </div>
        </div>
      </motion.div>

      <div className="relative  z-10 max-w-6xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
        {rulebookData.sections.map((section, idx) => (
          <motion.div
            key={section.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.08 }}
          >
            <RuleSection
              section={section}
              isExpanded={expandedSections.includes(section.id)}
              onToggle={toggleSection}
            />
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="overflow-hidden rounded-2xl border border-brand/10 bg-brand/[0.04] backdrop-blur-sm"
        >
          {/* Top rule bar */}
          <div className="h-[3px] w-full bg-gradient-to-r from-brand via-brand-300 to-purple-400" />

          <div className="px-6 py-5 sm:px-8 sm:py-6">
            {/* Header row */}
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-white/50">
                  PeakProfit Funding™ — Legal Documentation
                </p>
                <h3 className="mt-1 text-sm font-bold uppercase tracking-widest text-white">
                  Acknowledgment & Acceptance Clause
                </h3>
              </div>
              {/* Formal seal badge */}
              <div className="flex-shrink-0 rounded-sm border border-brand-400/35 bg-brand-400/10 px-2.5 py-1">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-brand-100">
                  Binding
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="mb-5 border-t border-dashed border-white/15" />

            {/* Body copy — left-border accent */}
            <div className="border-l-2 border-brand pl-4">
              <p className="text-xs sm:text-sm leading-[1.8] tracking-wide text-white/75">
                By accessing or using{" "}
                <Link to="/" className="font-semibold text-brand-100">
                  PeakProfit Funding™
                </Link>{" "}
                services, platforms, or associated materials, the Client hereby
                acknowledges that they have read, fully understood, and
                unconditionally agree to be bound by all terms, conditions,
                rules, and obligations set forth in this Rulebook, as amended
                from time to time.
              </p>
            </div>

            {/* Binding notice block */}
            <div className="mt-4 flex gap-3 rounded-sm border border-white/10 bg-white/[0.03] px-4 py-3">
              <div className="mt-0.5 flex-shrink-0">
                <div className="h-4 w-4 rounded-full border-2 border-brand" />
              </div>
              <p className="text-[11px] sm:text-xs leading-relaxed text-white/70">
                <span className="font-semibold uppercase tracking-wide text-brand-100">
                  Binding Notice —{" "}
                </span>
                Continued account access, platform activity, or participation in
                any funded evaluation constitutes full and irrevocable
                acceptance of these terms without exception.
              </p>
            </div>

            {/* Footer rule */}
            <div className="mt-5 border-t border-white/15 pt-3">
              <p className="text-[10px] tracking-wide text-white/45">
                Effective immediately upon account creation or first platform
                access. No signature required.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
