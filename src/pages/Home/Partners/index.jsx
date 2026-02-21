import React from "react";

// Asset Imports
import TradingViewLogo from "../../../assets/images/home/partners/TradingViewLogo.png";
import MassiveLogo from "../../../assets/images/home/partners/MassiveLogo.svg";
import AuthorizeNetLogo from "../../../assets/images/home/partners/AuthorizeNetLogo.png";
import KurvLogo from "../../../assets/images/home/partners/KurvLogo.jpg";
import PaymentCloudLogo from "../../../assets/images/home/partners/PaymentCloudLogo.svg";
import TrustPilotLogo from "../../../assets/images/home/partners/TrustPilotLogo.svg";
import PropfirmMatchLogo from "../../../assets/images/home/partners/PropfirmMatchLogo.svg";
import AutoCarousel from "../../../components/AutoCarousel";
import MainHeading from "../../../components/MainHeading";
import { motion } from "framer-motion";

const Partners = () => {
  const partnersLogos = [
    { src: AuthorizeNetLogo, alt: "Authorize.net" },
    { src: TradingViewLogo, alt: "TradingView" },
    { src: MassiveLogo, alt: "Massive" },
    { src: PaymentCloudLogo, alt: "PaymentCloud" },
    { src: KurvLogo, alt: "Kurv" },
    { src: TrustPilotLogo, alt: "TrustPilot" },
    { src: PropfirmMatchLogo, alt: "Propfirm Match" },
  ];

  return (
    <div className="w-full flex items-center justify-center py-12 text-center">
      <div className="max-w-7xl w-full px-5 md:px-0">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <MainHeading>OUR PARTNERS</MainHeading>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-gray-400 mb-5 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            PeakProfit is backed by institutional-grade infrastructure, ensuring{" "}
            <span className="text-white font-bold">
              seamless trading and payout experience for every trader
            </span>
          </p>
        </motion.p>

        <AutoCarousel
          items={partnersLogos}
          renderItem={(item, index) => (
            <div className="flex items-center justify-center mt-5 px-4 h-full group">
              <img
                src={item.src}
                alt={item.alt}
                className="
                  h-16 md:h-24 w-auto
                  object-contain 
                  grayscale opacity-80 
                  transition-all duration-500 
                  group-hover:grayscale-0 group-hover:opacity-100
                  brightness-[1.2] contrast-[0.8]
                "
              />
            </div>
          )}
          direction="right"
          itemWidth={200} // Increased to give logos breathing room
          speed={15} // Adjusted for a smoother glide
          gap={40}
        />
      </div>
    </div>
  );
};

export default Partners;
