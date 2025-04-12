import React from "react";
import Logo from "./Logo";
import { CiGlobe } from "react-icons/ci";

const FAQAllCollectionsHeader = () => {
  return (
    <header
      className="absolute -z-0 w-full h-[45vh] px-10 sm:px-20 md:px-40 lg:px-76 py-5 overflow-hidden"
      style={{
        backgroundImage: `
          linear-gradient(to bottom, rgba(255,255,255,0) 25%, white 100%),
          linear-gradient(to bottom right, #5500ff, #ff00a5)
        `,
        backgroundBlendMode: "normal",
        backgroundSize: "cover",
      }}
    >
      <div className="relative z-0 h-full flex flex-col">
        <div className="flex justify-between items-center">
          <Logo color={"white"} />

          <div className="flex items-center space-x-2 text-white">
            <CiGlobe size={24} className="opacity-90" />
            <select
              className="bg-transparent text-white text-sm focus:outline-none cursor-pointer hover:opacity-80 transition-opacity"
              defaultValue="en"
            >
              <option value="en" className="text-black">
                English
              </option>
            </select>
          </div>
        </div>
      </div>
    </header>
  );
};

export default FAQAllCollectionsHeader;
