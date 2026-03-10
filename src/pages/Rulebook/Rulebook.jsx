import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shield, ChevronDown, ArrowLeft } from "lucide-react";
import { rulebookData } from "../../lib/RulebookData";
import { useNavigate } from "react-router";

function InfoBox({ type = "info", children }) {
  const styles = {
    info: "bg-blue-50 border-blue-200 text-blue-900 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-200",
    success:
      "bg-green-50 border-green-200 text-green-900 dark:bg-green-900/20 dark:border-green-800 dark:text-green-200",
    warning:
      "bg-yellow-50 border-yellow-200 text-yellow-900 dark:bg-yellow-900/20 dark:border-yellow-800 dark:text-yellow-200",
    danger:
      "bg-red-50 border-red-200 text-red-900 dark:bg-red-900/20 dark:border-red-800 dark:text-red-200",
    text: "text-gray-700 dark:text-gray-300",
  };

  return type === "text" ? (
    <div className={styles[type]}>{children}</div>
  ) : (
    <div className={`rounded-lg border p-3 sm:p-4 ${styles[type]}`}>
      {children}
    </div>
  );
}

function RuleStatCard({ icon: Icon, label, value }) {
  return (
    <div className="rounded-lg border flex justify-between items-center border-gray-200 bg-gray-50 p-4 sm:p-4 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="flex items-center gap-2 sm:gap-3">
        <Icon className="h-5 w-5 text-blue-500 dark:text-blue-400 flex-shrink-0" />
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400 truncate">
          {label}
        </span>
      </div>
      <div className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white">
        {value}
      </div>
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
          <p className="font-semibold flex items-start sm:items-center gap-2 text-sm sm:text-base">
            {ContentIcon && (
              <ContentIcon className="h-4 w-4 flex-shrink-0 mt-0.5 sm:mt-0" />
            )}
            <span className="break-words">{title}</span>
          </p>
        )}

        {description && (
          <p className="text-xs sm:text-sm break-words">{description}</p>
        )}

        {items && (
          <ul className="ml-4 sm:ml-6 space-y-1 text-xs sm:text-sm list-disc">
            {items.map((item, idx) => (
              <li key={idx} className="break-words">
                {item}
              </li>
            ))}
          </ul>
        )}

        {gridItems && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm">
            {gridItems.map((column, colIdx) => (
              <ul key={colIdx} className="ml-4 sm:ml-6 space-y-1 list-disc">
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
          <ul className="ml-4 sm:ml-6 space-y-1 text-xs sm:text-sm list-disc">
            {secondaryItems.map((item, idx) => (
              <li key={idx} className="break-words">
                {item}
              </li>
            ))}
          </ul>
        )}

        {note && (
          <p className="text-xs sm:text-sm mt-2 font-medium break-words">
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
    <div className="rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-white/[0.03] overflow-hidden">
      <button
        onClick={() => onToggle(section.id)}
        className="w-full flex items-center justify-between p-4 sm:p-6 text-left hover:bg-gray-50 dark:hover:bg-white/[0.05] transition-colors"
      >
        <div className="flex items-center gap-2 sm:gap-3 flex-1 min-w-0">
          <Icon className="h-6 w-6 text-blue-500 dark:text-blue-400 flex-shrink-0" />
          <h2 className="text-base sm:text-xl font-bold text-gray-900 dark:text-white">
            {section.title}
          </h2>
        </div>

        <motion.div
          animate={{ rotate: isExpanded ? 180 : 0 }}
          transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500 dark:text-gray-400" />
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
  const navigate = useNavigate();

  const toggleSection = (sectionId) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 transition-colors relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-4 left-4 z-50 flex text-xs sm:text-sm items-center gap-2 rounded-full sm:rounded-lg bg-white/90 px-2 sm:px-3 py-2 font-medium text-gray-800 shadow hover:bg-white dark:bg-gray-900/60 hover:dark:bg-gray-900/80 dark:text-gray-200"
      >
        <ArrowLeft className="w-3 h-3 sm:h-4 sm:w-4" />
        <span className="hidden sm:block">Back</span>
      </button>

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-br from-blue-600 to-blue-700 dark:from-blue-900 dark:to-blue-950 pt-10"
      >
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <Shield className="h-12 w-12 text-white flex-shrink-0" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white break-words">
              PEAKPROFIT FUNDING™
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-blue-100 dark:text-blue-200 mb-2">
            Official Master Rulebook
          </p>
          <p className="text-xs sm:text-sm text-blue-200 dark:text-blue-300 mb-4">
            Risk Disclosures & Platform Terms
          </p>

          <div className="inline-block rounded-lg bg-white/10 px-3 py-2 sm:px-4 text-xs sm:text-sm text-white backdrop-blur-sm">
            Effective Immediately — All Traders Are Bound by These Terms
          </div>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8 space-y-4 sm:space-y-6">
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
          className="overflow-hidden rounded-sm border border-gray-300 bg-white shadow-[0_1px_4px_rgba(0,0,0,0.07)] dark:border-gray-700 dark:bg-gray-900"
        >
          {/* Top rule bar */}
          <div className="h-[3px] w-full bg-gray-900 dark:bg-gray-100" />

          <div className="px-6 py-5 sm:px-8 sm:py-6">
            {/* Header row */}
            <div className="mb-5 flex items-start justify-between gap-4">
              <div>
                <p className="text-[9px] font-bold uppercase tracking-[0.22em] text-gray-400 dark:text-gray-500">
                  PeakProfit Funding™ — Legal Documentation
                </p>
                <h3 className="mt-1 text-sm font-bold uppercase tracking-widest text-gray-900 dark:text-gray-100">
                  Acknowledgment & Acceptance Clause
                </h3>
              </div>
              {/* Formal seal badge */}
              <div className="flex-shrink-0 rounded-sm border border-gray-300 bg-gray-50 px-2.5 py-1 dark:border-gray-600 dark:bg-gray-800">
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-gray-500 dark:text-gray-400">
                  Binding
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="mb-5 border-t border-dashed border-gray-200 dark:border-gray-700" />

            {/* Body copy — left-border accent */}
            <div className="border-l-2 border-gray-900 pl-4 dark:border-gray-300">
              <p className="text-xs sm:text-sm leading-[1.8] tracking-wide text-gray-700 dark:text-gray-300">
                By accessing or using{" "}
                <span className="font-semibold text-gray-900 dark:text-gray-100">
                  PeakProfit Funding™
                </span>{" "}
                services, platforms, or associated materials, the Client hereby
                acknowledges that they have read, fully understood, and
                unconditionally agree to be bound by all terms, conditions,
                rules, and obligations set forth in this Rulebook, as amended
                from time to time.
              </p>
            </div>

            {/* Binding notice block */}
            <div className="mt-4 flex gap-3 rounded-sm border border-gray-200 bg-gray-50 px-4 py-3 dark:border-gray-700 dark:bg-gray-800/60">
              <div className="mt-0.5 flex-shrink-0">
                <div className="h-4 w-4 rounded-full border-2 border-gray-900 dark:border-gray-300" />
              </div>
              <p className="text-[11px] sm:text-xs leading-relaxed text-gray-600 dark:text-gray-400">
                <span className="font-semibold uppercase tracking-wide text-gray-800 dark:text-gray-200">
                  Binding Notice —{" "}
                </span>
                Continued account access, platform activity, or participation in
                any funded evaluation constitutes full and irrevocable
                acceptance of these terms without exception.
              </p>
            </div>

            {/* Footer rule */}
            <div className="mt-5 border-t border-gray-200 pt-3 dark:border-gray-700">
              <p className="text-[10px] tracking-wide text-gray-400 dark:text-gray-600">
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
