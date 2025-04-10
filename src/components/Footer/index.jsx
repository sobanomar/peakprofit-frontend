import React from "react";
import CompanyInfo from "./CompanyInfo";
import Contact from "./Contact";
import NewsLetter from "./NewsLetter";
import Links from "./Links";
import Legal from "./Legal";

const Footer = () => {
  return (
    <footer className="pt-20 md:pt-40 text-white w-full flex flex-col items-center">
      <div className="px-6 lg:w-[90%]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8 md:gap-4 mb-8">
          <div className="pr-6">
            <CompanyInfo />
          </div>

          <div className="lg:border-l border-gray-600 ">
            <Contact />
          </div>

          <div className="lg:border-l border-gray-600 lg:pl-6">
            <NewsLetter />
          </div>
        </div>

        <div className="flex justify-center items-center">
          <Links />
        </div>
      </div>
      <div className="px-6">
        <Legal />
      </div>
    </footer>
  );
};

export default Footer;
