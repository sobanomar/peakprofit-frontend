import React from "react";
import heroImage from "../../../assets/images/home/home_hero_2.png";
import discord from "../../../assets/images/home/discord.webp";
import ListedTTP from "../../../assets/images/home/Listed_TTP.webp";
import UnlistedFirm from "../../../assets/images/home/Unlisted_Firm.webp";
import timeLimitFeature from "../../../assets/images/home/time-limit-feature.svg";
import star from "../../../assets/images/home/star.svg";
import trading from "../../../assets/images/home/trading.svg";
import coins from "../../../assets/images/home/coins.svg";
import SmallCard from "./SmallCard";
import AnimatedButton from "../../../components/AnimatedButton";

const smallCardsData = [
  { imgSrc: coins, mainText: "Up to 95%", subText: "Reward Split" },
  { imgSrc: trading, mainText: "Up to $500k", subText: "Trading Accounts" },
  { imgSrc: star, mainText: "Add ons", subText: "95% Split + more" },
  {
    imgSrc: timeLimitFeature,
    mainText: "No time limit",
    subText: "in Challenge Phase",
  },
];

export default function HomeHero({ onStartChallengeClick }) {
  return (
    <div className="text-white  w-full flex flex-col py-12 lg:flex-row items-center justify-between px-6 lg:px-12 overflow-hidden relative">
      {/* Left content */}
      <div className="w-full lg:w-7/12 mb-10 lg:mb-0 z-10 ">
        <h1 className="text-4xl md:text-5xl lg:text-6xl  xl:text-7xl font-bold leading-tight mb-4">
          Fueling the Next <br /> Generation of Traders
        </h1>

        {/* Features */}
        <div className="flex gap-2 md:gap-4 mb-4">
          {smallCardsData.map((cardData, index) => (
            <SmallCard
              key={index}
              img={cardData.imgSrc}
              mainText={cardData.mainText}
              subText={cardData.subText}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row gap-2 mb-4 md:w-[85%] w-full ">
          <div className="md:w-1/2">
            <AnimatedButton
              text={"Start Challenge"}
              action={onStartChallengeClick}
            />
          </div>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/pF6H8G6yjY"
            className="bg-neutral-800 hover:bg-neutral-700 text-white py-2 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center border-1 border-neutral-500 md:w-1/2"
          >
            <img src={discord} className="h-6 w-6 mr-2" alt="dicord.jpeg" />
            Join Our Discord
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex justify-center md:justify-start gap-4 ml-2">
          <img src={ListedTTP} className="w-32 md:w-52" />
          <img src={UnlistedFirm} className="w-32 md:w-52" />
        </div>
      </div>

      {/* Right content - Device mockups */}
      <div className="w-full lg:w-7/12 ">
        <div className="relative justify-center items-center ">
          {/* You would replace these with your actual image sources */}
          <div className="w-full h-[120%] rounded-full bg-[radial-gradient(circle,_white,_transparent_70%)] opacity-40 absolute  left-0 -z-10 -bottom-7 md:-bottom-10 " />
          <img
            src={heroImage}
            alt="Trading app mockups"
            className="w-full object-contain"
          />
        </div>
      </div>
    </div>
  );
}
