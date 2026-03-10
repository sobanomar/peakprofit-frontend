import React from "react";
import AutoCarousel from "../../../components/AutoCarousel";
import RightToLeft from "./RightToLeft";
import LeftToRight from "./LeftToRight";
import MainHeading from "../../../components/MainHeading";
import { motion } from "framer-motion";

const TradingPairs = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="items-center flex flex-col my-20 px-6"
    >
      <MainHeading>TRADE 150+ PAIRS & MORE</MainHeading>
      <div className="w-full max-w-7xl space-y-4">
        <RightToLeft />
        <LeftToRight />
      </div>
    </motion.div>
  );
};

export default TradingPairs;
