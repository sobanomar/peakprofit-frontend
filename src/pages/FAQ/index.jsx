import React from "react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";
import { slugify } from "../../utils/slugify";
import { useFAQ } from "../../context/FAQContext";
import SearchBar from "./SearchBar";

const ArticleListing = () => {
  const faqSections = useFAQ();

  const renderSectionIcon = (icon) => {
    if (!React.isValidElement(icon)) return icon;

    return React.cloneElement(icon, {
      size: 30,
      className: "text-brand",
    });
  };

  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute -left-72 top-20 z-0 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-72 top-1/3 z-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-[140px]" />
      <div className="absolute theme-ambient-glow -right-80 -top-80 opacity-40 z-0" />

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 border-y border-white/10 bg-gradient-to-br from-brand-800/30 via-[#1c0d37] to-[#130025] pt-20"
      >
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <Shield className="h-12 w-12 text-brand flex-shrink-0" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white break-words">
              PEAKPROFIT FUNDING™
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-white/85 mb-2">
            Official FAQ Knowledge Base
          </p>
          <p className="text-xs sm:text-sm text-brand-200/90 mb-4">
            Answers, Platform Guidance & Policy Clarifications
          </p>

          <div className="inline-block rounded-lg border border-brand-400/30 bg-brand-400/10 px-3 py-2 sm:px-4 text-xs sm:text-sm text-brand-100 backdrop-blur-sm">
            Browse Collections or Search Instantly
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <SearchBar />
        </motion.div>

        <div className="space-y-4 sm:space-y-5">
          {faqSections.map((section, idx) => {
            const slug = slugify(section.title);
            const articleCount = section.articles?.length ?? 0;

            return (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
              >
                <Link
                  to={
                    articleCount > 1
                      ? `/collections/${slug}`
                      : `/collections/${slug}/${slug}`
                  }
                  className="block"
                >
                  <div className="group flex items-center gap-4 rounded-2xl border border-brand/10 bg-brand/[0.04] p-5 sm:p-6 backdrop-blur-sm transition-all duration-300 hover:border-brand/35 hover:bg-brand/[0.08]">
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 flex-shrink-0 items-center justify-center rounded-xl border border-brand/30 bg-brand/10">
                      {renderSectionIcon(section.icon)}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h2 className="text-lg sm:text-xl font-semibold text-white transition-colors duration-200 group-hover:text-brand-100">
                          {section.title}
                        </h2>
                        <span className="rounded-full border border-brand-400/30 bg-brand-400/10 px-2.5 py-1 text-[10px] sm:text-xs font-semibold uppercase tracking-wide text-brand-100">
                          {articleCount} Articles
                        </span>
                      </div>
                      <p className="mt-1 text-sm sm:text-base text-white/70">
                        {section.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ArticleListing;
