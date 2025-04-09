import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
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
  return (
    <div>
      <Header />
      <div className="py-20">
        <HomeHero />
        <VerifiedPayouts />
        <HowItWorks />
        <TradingPairs />
        <Evaluation />
        <WhyChoosePPF />
        <RawSpreads />
        <TraderTestimonials />
        <StillNotConvinced />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
