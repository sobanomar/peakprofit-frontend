import React, { useRef } from "react";
import HomeHero from "./HomeHero";
import HowItWorks from "./HowItWorks";
import RawSpreads from "./RawSpreads";
import StillNotConvinced from "./StillNotConvinced";
import VerifiedPayouts from "./VerifiedPayouts";
import TradingPairs from "./TradingPairs";
import WhyChoosePPF from "./WhyChoosePPF";
import TraderTestimonials from "./TraderTestimonials";
import Evaluation from "./Evaluation";
import JoinCommunity from "./JoinCommunity";
import AmbientGlowBackground from "../../components/AmbientGlowBackground";

const Home = () => {
  const handleChallengeClick = () => {
    window.open(
      import.meta.env.VITE_DASHBOARD_URL + "/login",
      "_blank",
      "noopener,noreferrer",
    );
  };

  return (
    <>
      <div className="relative overflow-x-hidden ">
        {/* <AmbientGlowBackground /> */}
        <HomeHero onStartChallengeClick={handleChallengeClick} />

        <div className="absolute theme-ambient-glow -right-80 -top-80 opacity-40 z-10" />
        <HowItWorks />
        <TradingPairs />
      </div>

      {/* <Evaluation /> */}
      <div className="relative overflow-x-hidden">
        <JoinCommunity />
        <div className="z-10 absolute theme-ambient-glow -left-80 top-40 opacity-40" />
        <WhyChoosePPF />
      </div>
      {/* <VerifiedPayouts /> */}
      {/* <RawSpreads /> */}
      <TraderTestimonials />
      {/* <StillNotConvinced /> */}
    </>
  );
};

export default Home;
