import React from "react";
import AutoCarousel from "../../../components/AutoCarousel";
import RightToLeft from "./RightToLeft";
import LeftToRight from "./LeftToRight";
import MainHeading from "../../../components/MainHeading";

const TradingPairs = () => {
  return (
    <div className="items-center flex flex-col my-20 px-6">
      <MainHeading>TRADE 150+ PAIRS & MORE</MainHeading>
      <div className="w-full max-w-7xl space-y-4">
        <RightToLeft />
        <LeftToRight />
      </div>
    </div>
  );
};

export default TradingPairs;
