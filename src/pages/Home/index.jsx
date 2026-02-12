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
      <div className="relative overflow-x-hidden">
        <HomeHero onStartChallengeClick={handleChallengeClick} />

        <div className="absolute theme-ambient-glow -right-80 top-40 opacity-60" />
        <HowItWorks />
      </div>

      <VerifiedPayouts />
      <TradingPairs />
      <Evaluation />
      <WhyChoosePPF />
      <RawSpreads />
      <TraderTestimonials />
      <StillNotConvinced />
    </>
  );
};

export default Home;
