import { FaChevronRight } from "react-icons/fa";
import CopyField from "../../components/CopyField";
import React from "react";
import { Link } from "react-router";

const RawSpreads = () => {
  return (
    <div className="flex py-6 md:py-8 lg:py-12 items-center justify-center">
      <div className="bg-[#2C1B3C] w-[90%] md:w-[85%] lg:w-[75%] text-white px-4 md:px-5 lg:px-6 rounded-xl md:rounded-2xl flex flex-col lg:flex-row justify-between gap-4 md:gap-6 lg:gap-8">
        {/* Left Side */}
        <div className="flex-1 gap-1 md:gap-2 flex flex-col mt-6 md:mt-10 lg:mt-16 pl-3 md:pl-6 lg:pl-10">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium">
            Try Our Raw Spreads!
          </h2>
          <p className="mt-2 md:mt-3 lg:mt-5 text-sm sm:text-base md:text-lg lg:text-xl">
            Try out near zero sharp spreads at PPF. Use these credentials to
            login to the Platform5 trading platform.
          </p>
          <ul className="mb-2 md:mb-4 text-sm sm:text-base md:text-lg lg:text-xl space-y-1">
            <li>Crypto commissions: 0.032% per side</li>
            <li>FX commissions: 3 USD per Lot</li>
            <li>Metals commissions: 5 USD per Lot</li>
            <li>Indices commissions: 5 USD per Lot</li>
          </ul>
          <Link
            to="trading-pairs"
            className="mt-4 md:mt-8 mb-0 lg:mb-10 lg:mt-10 xl:mt-14 w-fit flex items-center gap-1 md:gap-2 bg-white text-black py-1.5 px-2 md:py-2 md:px-3 lg:py-3 lg:px-4 rounded-md font-semibold hover:bg-neutral-300 transition-all duration-250 text-xs sm:text-sm md:text-base"
          >
            All our Trading Pairs{" "}
            <FaChevronRight color="black" className="mt-0.5" size={12} />
          </Link>
        </div>

        {/* Right Side */}
        <div className="bg-white text-black p-3 md:p-4 lg:p-6 mt-2 mb-4 md:mb-6 lg:mb-8 rounded-xl md:rounded-2xl w-full lg:max-w-sm shadow-lg">
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium mb-2 md:mb-3 lg:mb-4">
            TradeLocker
          </h3>
          <CopyField label="Login ID" value="98814844" />
          <CopyField label="Password" value="Ja0Ka8w*A" />
          <CopyField label="Server" value="NeolinCapitalMarket" />
        </div>
      </div>
    </div>
  );
};

export default RawSpreads;
