import AnimatedButton from "../../../components/AnimatedButton";
import HeroBGVideo from "../../../assets/videos/heroBGVideo.mp4";
import discord from "../../../assets/images/home/discord.webp";
import React from "react";

import { Typewriter } from "@/components/ui/typewriter-text";
import { BsDiscord } from "react-icons/bs";
import LiquidGlassButton from "../../../components/ui/LiquidGlassButton";

export default function HomeHero({ onStartChallengeClick }) {
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
      {/* Bottom Fade Overlay */}
      {/* <div className="absolute  inset-0 -z-10 bg-[#130025]/60 "></div> */}
      <div className="absolute  inset-0 -z-10 bg-[#000]/20 "></div>
      <div
        className="absolute bottom-0 left-0 w-full h-64 -z-5
  bg-gradient-to-b 
  from-transparent 
  to-[#130025]"
      />

      <div className="absolute theme-ambient-glow -right-80 top-40 opacity-60" />

      {/* Content */}
      <div className="z-10 text-center flex flex-col justify-center items-center">
        <h1 className="h-40 sm:h-96 w-full text-center flex flex-col justify-center">
          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-8xl font-bold leading-tight text-white">
            We are{" "}
            <span className="text-[#33e4f6] font-extrabold">Fueling</span>
            <br />
          </span>
          <Typewriter
            text={[
              "Next Generation of Traders",
              "Tomorrow's Market Leaders",
              "Future of Financial Freedom",
            ]}
            speed={200}
            loop={true}
            className=" text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white"
          />
        </h1>

        <LiquidGlassButton
          width={400}
          height={80}
          className={
            "text-2xl bg-gradient-to-r from-purple-600/10 to-blue-600/10 font-extrabold"
          }
          onClick={onStartChallengeClick}
        >
          START NEW CHALLENGE
        </LiquidGlassButton>

        {/* <div className="flex sm:flex-row flex-col w-fix justify-center items-center mt-12 gap-4 ">
          <AnimatedButton
            text={"Start New Challenge"}
            action={onStartChallengeClick}
          />

          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/peakprofit"
            className="bg-purple-900/20 gap-2 w-full hover:shadow-[0_0_30px_2px_rgba(174,48,255,0.5)] hover:bg-purple-500/30 text-white cursor-pointer 
  py-5 px-8 rounded-2xl font-semibold 
  transition-all duration-300 
  flex items-center justify-center 
  border border-purple-500 whitespace-nowrap"
          >
            <BsDiscord size={32} className=" text-[#7289da]" />
            <span className="xl:text-3xl font-bold">Join Our Discord</span>
          </a>
        </div> */}
      </div>
    </div>
  );
}
