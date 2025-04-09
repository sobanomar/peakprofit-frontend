import React from "react";

import XRP from "../../../assets/images/home/trading_pairs/xrp.webp";
import KCS from "../../../assets/images/home/trading_pairs/kcs.webp";
import LINK from "../../../assets/images/home/trading_pairs/link.webp";
import LTC from "../../../assets/images/home/trading_pairs/ltc.webp";
import MCO from "../../../assets/images/home/trading_pairs/mco.webp";
import OXT from "../../../assets/images/home/trading_pairs/oxt.webp";
import RAP from "../../../assets/images/home/trading_pairs/rap.webp";
import REN from "../../../assets/images/home/trading_pairs/ren.webp";
import REPV2 from "../../../assets/images/home/trading_pairs/repv2.webp";
import REQ from "../../../assets/images/home/trading_pairs/req.webp";
import SKY from "../../../assets/images/home/trading_pairs/sky.webp";
import STEEM from "../../../assets/images/home/trading_pairs/steem.webp";
import TRX from "../../../assets/images/home/trading_pairs/trx.webp";
import UNI from "../../../assets/images/home/trading_pairs/uni.webp";
import XMR from "../../../assets/images/home/trading_pairs/xmr-1.webp";
import ALGO from "../../../assets/images/home/trading_pairs/algo.webp";
import BNB from "../../../assets/images/home/trading_pairs/bnb.webp";
import BTC from "../../../assets/images/home/trading_pairs/btc.webp";
import SHIB from "../../../assets/images/home/trading_pairs/SHIB.webp";

import AutoCarousel from "../../../components/AutoCarousel";
import CarouselRenderItem from "../../../components/CarouselRenderItem";

const LeftToRight = () => {
  const tradingPairImages = [
    XRP,
    KCS,
    LINK,
    LTC,
    MCO,
    OXT,
    RAP,
    REN,
    REPV2,
    REQ,
    SKY,
    STEEM,
    TRX,
    UNI,
    XMR,
    ALGO,
    BNB,
    BTC,
    SHIB,
  ];

  return (
    <div>
      <AutoCarousel
        items={tradingPairImages}
        renderItem={(image, index) => (
          <CarouselRenderItem image={image} index={index} />
        )}
        direction="right"
        itemWidth={120}
        speed={8}
        gap={20}
        pauseOnHover={false}
      />
    </div>
  );
};

export default LeftToRight;
