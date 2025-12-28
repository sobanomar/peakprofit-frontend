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
    window.location.href = import.meta.env.VITE_DASHBOARD_URL + "/login";
  };

  return (
    <>
      <HomeHero onStartChallengeClick={handleChallengeClick} />
      {/* <VerifiedPayouts /> */}
      <HowItWorks />
      <TradingPairs />
      <Evaluation />
      <WhyChoosePPF />
      <RawSpreads />
      {/* <TraderTestimonials /> */}
      <StillNotConvinced />
    </>
  );
};

export default Home;
