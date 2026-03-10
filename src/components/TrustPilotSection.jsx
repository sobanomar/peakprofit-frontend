import { useEffect } from "react";
import { motion } from "framer-motion";
import MainHeading from "./MainHeading";

const TrustPilotSection = () => {
  useEffect(() => {
    if (window.Trustpilot) {
      window.Trustpilot.loadFromElement(
        document.querySelector(".trustpilot-widget"),
        true,
      );
    }
  }, []);

  return (
    <section className="relative w-full py-16 mt-12 px-6 bg-gradient-to-b  text-white overflow-hidden">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-xs sm:w-2xl h-[600px] bg-brand-500/15 blur-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block py-1 px-4 mb-6 text-xs font-black tracking-[0.2em] text-brand-400 uppercase border border-brand-400/30 rounded-full bg-brand-400/5"
        >
          Trusted By Traders
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold"
        >
          <MainHeading>Real Feedback. Real Performance.</MainHeading>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-gray-400 mb-5 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          PeakProfit traders share their experience with our execution,
          transparency, and funding process.
        </motion.p>

        {/* Trustpilot Card Container */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <div
            className="trustpilot-widget"
            data-locale="en-US"
            data-template-id="56278e9abfbbba0bdcd568bc"
            data-businessunit-id="69845decabb8a0a2645253eb"
            data-style-height="52px"
            data-style-width="100%"
            data-token="b10bc3f2-b941-406f-9a38-ba2e84c240e6"
          >
            <a
              href="https://www.trustpilot.com/review/peakprofitfunding.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Trustpilot
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustPilotSection;
