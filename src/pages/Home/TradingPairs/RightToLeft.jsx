import React from "react";

import ETH from "../../../assets/images/home/trading_pairs/ETH.webp";
import PEPE from "../../../assets/images/home/trading_pairs/PEPE.webp";
import SOL from "../../../assets/images/home/trading_pairs/SOL.webp";
import ADA from "../../../assets/images/home/trading_pairs/ADA-7-1.webp";
import SUI from "../../../assets/images/home/trading_pairs/SUI.webp";
import AVAX from "../../../assets/images/home/trading_pairs/AVAX.webp";
import HBAR from "../../../assets/images/home/trading_pairs/HBAR.webp";
import CAKE from "../../../assets/images/home/trading_pairs/CAKE.webp";
import CRV from "../../../assets/images/home/trading_pairs/CRV-1.webp";
import BSV from "../../../assets/images/home/trading_pairs/BSV.webp";
import OCEAN from "../../../assets/images/home/trading_pairs/OCEAN.webp";
import OKB from "../../../assets/images/home/trading_pairs/OKB.webp";
import ERG from "../../../assets/images/home/trading_pairs/ERG-1.webp";
import WOO from "../../../assets/images/home/trading_pairs/WOO.webp";
import MASK from "../../../assets/images/home/trading_pairs/MASK.webp";
import FTT from "../../../assets/images/home/trading_pairs/FTT.webp";
import OP from "../../../assets/images/home/trading_pairs/OP.webp";
import KDA from "../../../assets/images/home/trading_pairs/KDA-1.webp";
import AutoCarousel from "../../../components/AutoCarousel";
import CarouselRenderItem from "../../../components/CarouselRenderItem";
import AAC from "../../../assets/images/home/trading_pairs/america-and-canada.jpg";
import Screenshot2 from "../../../assets/images/home/trading_pairs/Screenshot2.png";
import Screenshot3 from "../../../assets/images/home/trading_pairs/Screenshot3.png";
import Screenshot4 from "../../../assets/images/home/trading_pairs/Screenshot4.png";
import Screenshot5 from "../../../assets/images/home/trading_pairs/Screenshot5.png";
import Screenshot6 from "../../../assets/images/home/trading_pairs/Screenshot6.png";
import Screenshot8 from "../../../assets/images/home/trading_pairs/Screenshot8.png";
import Screenshot9 from "../../../assets/images/home/trading_pairs/Screenshot9.png";
import Screenshot10 from "../../../assets/images/home/trading_pairs/Screenshot10.png";
import Screenshot11 from "../../../assets/images/home/trading_pairs/Screenshot11.png";
import Screenshot12 from "../../../assets/images/home/trading_pairs/Screenshot12.png";
import Screenshot13 from "../../../assets/images/home/trading_pairs/Screenshot13.png";
import Screenshot14 from "../../../assets/images/home/trading_pairs/Screenshot14.png";
import Screenshot15 from "../../../assets/images/home/trading_pairs/Screenshot15.png";
import Screenshot16 from "../../../assets/images/home/trading_pairs/Screenshot16.png";
import Screenshot17 from "../../../assets/images/home/trading_pairs/Screenshot17.png";
import Screenshot18 from "../../../assets/images/home/trading_pairs/Screenshot18.png";
import Screenshot19 from "../../../assets/images/home/trading_pairs/Screenshot19.png";
import Screenshot20 from "../../../assets/images/home/trading_pairs/Screenshot20.png";
import Screenshot21 from "../../../assets/images/home/trading_pairs/Screenshot21.png";
import Screenshot22 from "../../../assets/images/home/trading_pairs/Screenshot22.png";
import Screenshot23 from "../../../assets/images/home/trading_pairs/Screenshot23.png";
import Screenshot24 from "../../../assets/images/home/trading_pairs/Screenshot24.png";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const RightToLeft = () => {
  const screenshots = [
    Screenshot2,
    Screenshot3,
    Screenshot4,
    Screenshot5,
    Screenshot6,
    Screenshot8,
    Screenshot9,
    Screenshot10,
    Screenshot11,
    Screenshot12,
    Screenshot13,
    Screenshot14,
    Screenshot15,
    Screenshot16,
    Screenshot17,
    Screenshot18,
    Screenshot19,
    Screenshot20,
    Screenshot21,
    Screenshot22,
    Screenshot23,
    Screenshot24,
  ];

  const otherImages = [
    AAC,
    ETH,
    PEPE,
    SOL,
    ADA,
    SUI,
    AVAX,
    HBAR,
    CAKE,
    CRV,
    BSV,
    OCEAN,
    OKB,
    ERG,
    WOO,
    MASK,
    FTT,
    OP,
    KDA,
  ];

  const tradingPairImages = shuffleArray([...screenshots, ...otherImages]);

  return (
    <div>
      <AutoCarousel
        items={tradingPairImages}
        renderItem={(image, index) => (
          <CarouselRenderItem image={image} index={index} />
        )}
        direction="left"
        itemWidth={120}
        speed={8}
        gap={20}
        pauseOnHover={false}
      />
    </div>
  );
};

export default RightToLeft;
