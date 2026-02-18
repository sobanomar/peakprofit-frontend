import React from "react";
import { motion } from "framer-motion";

// Asset Imports
import TradingViewLogo from "../../../assets/images/home/partners/TradingViewLogo.png";
import MassiveLogo from "../../../assets/images/home/partners/MassiveLogo.svg";
import AuthorizeNetLogo from "../../../assets/images/home/partners/AuthorizeNetLogo.png";
import KurvLogo from "../../../assets/images/home/partners/KurvLogo.jpg";

const partners = [
  {
    name: "Authorize.net",
    role: "Payment Gateway",
    logo: AuthorizeNetLogo,
    description:
      "Providing secure, industry-leading payment processing to ensure your transactions are handled with institutional-grade safety.",
  },
  {
    name: "Massive",
    role: "Execution Partner",
    logo: MassiveLogo,
    description:
      "Powering our backend infrastructure with high-frequency execution and seamless trade routing for minimal slippage.",
  },
  {
    name: "TradingView",
    role: "Charting Technology",
    logo: TradingViewLogo,
    description:
      "The world's standard in financial visualization, fully integrated into our platform for advanced technical analysis.",
  },
  {
    name: "Kurv",
    role: "Trading Interface",
    logo: KurvLogo,
    description:
      "A sophisticated, user-centric trading platform designed for modern traders who demand speed and cross-device flexibility.",
  },
];

const Partners = () => {
  return (
    <section className="w-full py-24 flex flex-col items-center">
      <div className="max-w-7xl w-full px-6 lg:px-8">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Strategic <span className="text-brand">Partners.</span>
            </h2>
            <p className="text-zinc-400 text-lg">
              We collaborate with industry leaders to provide the most robust
              infrastructure in the prop firm space.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="px-5 py-2 rounded-full border border-white/10 bg-white/5 text-zinc-400 text-sm font-semibold tracking-wide">
              4 Institutional Partners
            </div>
          </div>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group relative p-8 rounded-3xl border border-white/10 bg-white/[0.03] backdrop-blur-sm transition-all duration-300 hover:border-brand/40 hover:bg-white/[0.06]"
            >
              {/* Subtle Background Glow on Hover */}
              <div className="absolute inset-0 rounded-3xl bg-brand/5 opacity-0 group-hover:opacity-100 transition-opacity blur-2xl" />

              <div className="relative z-10 flex flex-col h-full">
                {/* Logo Area */}
                <div className="h-14 w-full mb-8 flex items-center justify-start">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="h-full max-w-[140px] object-contain grayscale group-hover:grayscale-0 transition-all duration-500 opacity-60 group-hover:opacity-100"
                  />
                </div>

                {/* Partner Info */}
                <div className="mt-auto">
                  <span className="text-brand text-[10px] font-black uppercase tracking-[0.2em] mb-2 block">
                    {partner.role}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
                    {partner.name}
                  </h3>
                  <p className="text-zinc-400 text-sm leading-relaxed font-medium">
                    {partner.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
