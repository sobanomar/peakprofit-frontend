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
    <section className="relative w-full py-16 mt-12 px-6 bg-gradient-to-b  text-white">
      {/* Subtle Glow Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-xs sm:w-2xl h-100 bg-brand-500/30 sm:bg-brand-500/20 blur-[140px] -translate-x-1/2 -translate-y-1/2 rounded-full" />
      </div>

      <div className="relative max-w-5xl mx-auto text-center">
        {/* Heading */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MainHeading>TRUSTED BY TRADERS</MainHeading>
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <MainHeading size="sm">Real Feedback. Real Performance.</MainHeading>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-zinc-400 mt-4 max-w-2xl mx-auto"
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
          className="mt-12"
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
