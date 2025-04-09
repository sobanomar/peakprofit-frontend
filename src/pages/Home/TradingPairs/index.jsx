import React from "react";
import AutoCarousel from "../../../components/AutoCarousel";
import RightToLeft from "./RightToLeft";
import LeftToRight from "./LeftToRight";

const TradingPairs = () => {
  return (
    <div className="items-center flex flex-col my-20">
      <div className="text-6xl text-center text-white font-semibold my-8">
        Trade 150+ Pairs & More
      </div>
      <div className="w-[90%] space-y-4">
        <RightToLeft />
        <LeftToRight />
      </div>
    </div>
  );
};

export default TradingPairs;
