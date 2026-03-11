import { Outlet } from "react-router";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../pages/FAQ/SearchBar";
import { FaQ } from "react-icons/fa6";
import PageTopHero from "../components/PageTopHero";

const FAQSingleCollectionLayout = () => {
  return (
    <div className="relative min-h-screen overflow-hidden text-white">
      <div className="pointer-events-none absolute -left-72 top-20 z-0 h-[28rem] w-[28rem] rounded-full bg-brand/15 blur-[120px]" />
      <div className="pointer-events-none absolute -right-72 top-1/3 z-0 h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-[140px]" />
      <div className="absolute theme-ambient-glow -right-80 -top-80 opacity-40 z-0" />

      <Header />

      <PageTopHero
        icon={FaQ}
        subtitle="FAQ Collections & Articles"
        description="Browse Categories, Read Detailed Answers & Search Instantly"
        badgeText="Support Documentation & Platform Guidance"
      />

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
