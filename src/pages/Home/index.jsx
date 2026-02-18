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
import PeakMarkets from "./PeakMarkets";
import TradingJourney from "./TradingJourney";
import Partners from "./Partners";

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
      </div>
      <HowItWorks />
      <div className="relative overflow-x-hidden">
        <PeakMarkets />
        <div className="z-10 absolute theme-ambient-glow -left-80 top-40 opacity-40" />
        <div className="relative overflow-x-hidden">
          <TraderTestimonials />
          <div className="z-10 absolute theme-ambient-glow -right-80 top-40 opacity-40" />
          <TradingJourney />
        </div>
      </div>

      {/* <Evaluation /> */}
      <div className="relative overflow-x-hidden ">
        <TradingPairs />
        <div className="z-10 absolute theme-ambient-glow -left-80 top-40 opacity-40" />
        <WhyChoosePPF />
      </div>

      <div className="relative overflow-x-hidden ">
        <JoinCommunity />
        <Partners />
        <div className="z-10 absolute theme-ambient-glow -right-80 bottom-40 opacity-40" />
      </div>

      {/* <VerifiedPayouts /> */}
      {/* <RawSpreads /> */}

      {/* <StillNotConvinced /> */}
    </>
  );
};

export default Home;
