import AnimatedButton from "../../../components/AnimatedButton";
import HeroBGVideo from "../../../assets/videos/heroBGVideo.mp4";
import discord from "../../../assets/images/home/discord.webp";
import React from "react";

import { Typewriter } from "@/components/ui/typewriter-text";

export default function HomeHero({ onStartChallengeClick }) {
  return (
    <div className="relative w-full min-h-screen  flex flex-col items-center justify-center px-6 lg:px-12 overflow-hidden text-white">
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
      ></div>

      {/* Content */}
      <div className="z-10 text-center flex flex-col justify-center items-center">
        <h1 className=" h-96 text-center flex flex-col justify-center">
          <span className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-white">
            We are <span className="text-purple-400 neon-text"> fueling</span>{" "}
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

        <div className="flex justify-center items-center mt-12 gap-4 w-full">
          <AnimatedButton
            text={"Start Challenge"}
            action={onStartChallengeClick}
          />
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/peakprofit"
            className="bg-neutral-800 hover:bg-neutral-700 text-white cursor-pointer 
  py-6 px-8 rounded-2xl font-semibold 
  transition-all duration-300 
  flex items-center justify-center 
  border border-neutral-500 whitespace-nowrap"
          >
            <img src={discord} className="h-6 w-6 mr-2" alt="discord" />
            <span className="xl:text-3xl font-bold">Join Our Discord</span>
          </a>
        </div>
      </div>
    </div>
  );
}
