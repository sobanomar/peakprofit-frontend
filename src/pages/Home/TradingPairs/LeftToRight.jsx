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

import AutoCarousel from "../../../components/AutoCarousel";
import CarouselRenderItem from "../../../components/CarouselRenderItem";

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5);
};

const LeftToRight = () => {
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

  const tradingPairImages = shuffleArray([...screenshots, ...otherImages]);

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
