import { Outlet } from "react-router";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../pages/FAQ/SearchBar";
import { FaQ } from "react-icons/fa6";

const FAQSingleCollectionLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute -left-72 top-20 z-0 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-72 top-1/3 z-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-[140px]" />
      <div className="absolute theme-ambient-glow -right-80 -top-80 opacity-40 z-0" />

      <Header />

      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 border-y border-white/10 bg-gradient-to-br from-brand-800/30 via-[#1c0d37] to-[#130025] pt-20"
      >
        <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 mb-4 sm:mb-6">
            <FaQ className="h-12 w-12 text-brand flex-shrink-0" />
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white break-words">
              PEAKPROFIT FUNDING™
            </h1>
          </div>

          <p className="text-lg sm:text-xl text-white/85 mb-2">
            FAQ Collections & Articles
          </p>
          <p className="text-xs sm:text-sm text-brand-200/90 mb-4">
            Browse Categories, Read Detailed Answers & Search Instantly
          </p>

          <div className="inline-block rounded-lg border border-brand-400/30 bg-brand-400/10 px-3 py-2 sm:px-4 text-xs sm:text-sm text-brand-100 backdrop-blur-sm">
            Support Documentation & Platform Guidance
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

        <div className="pt-2 pb-20">
          <Outlet />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQSingleCollectionLayout;
