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

const RightToLeft = () => {
  const tradingPairImages = [
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
