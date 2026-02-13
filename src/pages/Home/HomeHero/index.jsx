import AnimatedButton from "../../../components/AnimatedButton";
import HeroBGVideo from "../../../assets/videos/heroBGVideo.mp4";
import discord from "../../../assets/images/home/discord.webp";
import React from "react";

import { Typewriter } from "@/components/ui/typewriter-text";
import { BsDiscord } from "react-icons/bs";
import LiquidGlassButton from "../../../components/ui/LiquidGlassButton";
import { TrendingUp, Shield, DollarSign, Zap } from "lucide-react";

export default function HomeHero({ onStartChallengeClick }) {
  const keyValues = [
    {
      value: "Up to 95%",
      label: "Profit Split",
      Icon: TrendingUp,
      color: "text-green-400",
    },
    {
      value: "No Risk",
      label: "Your Capital Safe",
      Icon: Shield,
      color: "text-blue-400",
    },
    {
      value: "Up to $300K",
      label: "Account Size",
      Icon: DollarSign,
      color: "text-yellow-400",
    },
    {
      value: "Instant",
      label: "Account Access",
      Icon: Zap,
      color: "text-purple-400",
    },
  ];

  return (
    <div className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 lg:px-12 overflow-hidden text-white">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full opacity-30 object-cover -z-20 saturate-50"
      >
        <source src={HeroBGVideo} type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 -z-10 bg-[#000]/20"></div>
      <div className="absolute bottom-0 left-0 w-full h-64 -z-5 bg-gradient-to-b from-transparent to-[#130025]" />

      {/* Content */}
      <div className="z-10 text-center mt-32 lg:mt-24 flex flex-col justify-center items-center">
        <h1 className=" w-full text-center flex flex-col justify-center">
          <span className="text-5xl md:text-6xl lg:text-8xl font-bold leading-tight text-white">
            We are <span className="text-brand font-extrabold">Fueling</span>
            <br />
          </span>
          <Typewriter
            text={["Future Traders", "Market Leaders", "Financial Freedom"]}
            speed={300}
            loop={true}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
          />
        </h1>

        {/* Subheading */}
        <p className="my-4 text-base md:text-lg lg:text-xl text-white max-w-3xl">
          Your capital shouldn't limit your potential. <br /> We provide the
          funding — you deliver the performance.
        </p>

        <LiquidGlassButton
          className={
            "text-white hover:text-brand-900 text-lg md:text-xl mt-4 rounded-full lg:text-2xl w-60 md:w-80 h-14 md:h-20 bg-linear-to-r from-purple-400/5 to-blue-400/5 hover:bg-brand font-extrabold"
          }
          onClick={onStartChallengeClick}
        >
          START TRADING
        </LiquidGlassButton>

        {/* Key Values Section with Animated Icons */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-5xl w-full">
          {keyValues.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-brand/50 hover:bg-white/10  transition-all duration-300 hover:scale-105"
            >
              <item.Icon
                className={`w-6 h-6 mb-3 ${item.color} 
    group-hover:scale-110 transition-transform duration-300
    icon-float icon-glow`}
                strokeWidth={2}
                style={{ animationDelay: `${index * 0.2}s` }}
              />
              <div className="text-base font-bold text-white">{item.value}</div>
              <div className="text-xs md:text-sm text-white/70 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
