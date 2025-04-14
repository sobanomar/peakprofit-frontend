import React from "react";
import ListSection from "./ListSection";
import { Link } from "react-router";

const TradingPairs = () => {
  const cryptoPairs = [
    "BTCUSDT",
    "YFIUSDT",
    "ETHUSDT",
    "MKRUSDT",
    "BNBUSDT",
    "BCHUSDT",
    "AAVEUSDT",
    "SOLUSDT",
    "LTCUSDT",
    "COMPUSDT",
    "ZECUSDT",
    "DASHUSDT",
    "AVAXUSDT",
    "EGLDUSDT",
    "ETCUSDT",
    "KSMUSDT",
    "LINKUSDT",
    "ZENUSDT",
    "NEOUSDT",
    "UNIUSDT",
    "DOTUSDT",
    "ATOMUSDT",
    "AXSUSDT",
    "FILUSDT",
    "QTUMUSDT",
    "NEARUSDT",
    "XRPUSDT",
    "BALUSDT",
    "UNFIUSDT",
    "THETAUSDT",
    "RLCUSDT",
    "RUNEUSDT",
    "WAVESUSDT",
    "SNXUSDT",
    "BANDUSDT",
    "SUSHIUSDT",
    "BELUSDT",
    "XTZUSDT",
    "ADAUSDT",
    "LITUSDT",
    "ALICEUSDT",
    "FTMUSDT",
    "SFPUSDT",
    "EOSUSDT",
    "OCEANUSDT",
    "CRVUSDT",
    "CTKUSDT",
    "KAVAUSDT",
    "KNCUSDT",
    "SANDUSDT",
    "OMGUSDT",
    "STORJUSDT",
    "MATICUSDT",
    "XLMUSDT",
    "ZRXUSDT",
    "MANAUSDT",
  ];
  const forexPairs = [
    "XAUUSD.e",
    "GBPJPY.e",
    "CHFJPY.e",
    "EURJPY.e",
    "USDJPY.e",
    "CADJPY.e",
    "AUDJPY.e",
    "NZDJPY.e",
    "XAGUSD.e",
    "GBPNZD.e",
    "GBPAUD.e",
    "EURNZD.e",
    "GBPCAD.e",
    "EURAUD.e",
    "EURCAD.e",
    "USDCAD.e",
    "GBPUSD.e",
    "GBPCHF.e",
    "AUDNZD.e",
    "EURUSD.e",
    "EURCHF.e",
    "AUDCAD.e",
    "USDCHF.e",
    "EURGBP.e",
    "NZDCAD.e",
    "AUDUSD.e",
    "CADCHF.e",
    "NZDUSD.e",
    "AUDCHF.e",
    "NZDCHF.e",
  ];
  const indices = [
    "US30.e",
    "US500.e",
    "UT100.e",
    "UK100.e",
    "JP225.e",
    "HK50.e",
    "FR40.e",
    "EU50.e",
    "DE40.e",
    "ES35.e",
    "AU200.e",
  ];

  return (
    <div className="pt-12 md:pt-32 text-white w-full flex flex-col items-center">
      <div className=" lg:w-[80%] mx-6 space-y-16">
        <div
          style={{ boxShadow: "0px 0px 20px rgba(192, 132, 252, 0.3)" }}
          className=" p-6 md:p-12 rounded-2xl border border-purple-400 bg-gray-700/40 "
        >
          <div className="p-2">
            <h1 className="text-4xl font-semibold">
              GetCrypto Funded Tradable Pairs
            </h1>
            <p className="py-2 text-lg">
              Trade with confidence across a wide range of Crypto, Forex, and
              Indices available on our platform.
            </p>
          </div>

          <div className="mt-12">
            <ListSection title={"CRYPTO PAIRS"} sectionArray={cryptoPairs} />
            <ListSection title={"FOREX PAIRS"} sectionArray={forexPairs} />
            <ListSection title={"INDICES"} sectionArray={indices} />
          </div>
        </div>
        <div
          style={{ boxShadow: "0px 0px 20px rgba(192, 132, 252, 0.3)" }}
          className=" p-6 md:p-12 rounded-2xl border border-purple-400 bg-gray-700/20 space-y-3"
        >
          <h1 className="text-3xl font-bold">Ready to Start Trading?</h1>
          <p className="text-lg font-light">
            Join GetCrypto Funded and access top-tier trading pairs with instant
            funding. Maximize your potential today!
          </p>

          <div className="mt-8 mb-4">
            <Link
              className="bg-purple-400 rounded-lg px-6 py-3 text-xl font-semibold"
              to={"/"}
            >
              Start Trading Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradingPairs;
