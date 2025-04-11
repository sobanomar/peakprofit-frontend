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
  const evaluationRef = useRef(null);

  const scrollToEvaluation = () => {
    evaluationRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <HomeHero onStartChallengeClick={scrollToEvaluation} />
      <VerifiedPayouts />
      <HowItWorks />
      <TradingPairs />
      <Evaluation ref={evaluationRef} />
      <WhyChoosePPF />
      <RawSpreads />
      <TraderTestimonials />
      <StillNotConvinced />
    </>
  );
};

export default Home;
