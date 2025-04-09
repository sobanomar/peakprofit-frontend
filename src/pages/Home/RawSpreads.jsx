import { FaChevronRight } from "react-icons/fa";
import CopyField from "../../components/CopyField";
import React from "react";

const RawSpreads = () => {
  return (
    <div className="flex py-12 items-center justify-center">
      <div className="bg-[#2C1B3C] w-[75%] text-white px-4 rounded-2xl flex flex-col md:flex-row justify-between gap-8">
        {/* Left Side */}
        <div className="flex-1 gap-2 flex flex-col mt-16 pl-10 ">
          <h2 className="text-5xl font-medium ">Try Our Raw Spreads!</h2>
          <p className="mt-5 text-xl">
            Try out near zero sharp spreads at GCF. Use these credentials to
            login to the Platform5 trading platform.
          </p>
          <ul className="mb-4 text-xl space-y-1">
            <li>Crypto commissions: 0.032% per side</li>
            <li>FX commissions: 3 USD per Lot</li>
            <li>Metals commissions: 5 USD per Lot</li>
            <li>Indices commissions: 5 USD per Lot</li>
          </ul>
          <button className="mt-14  w-fit flex items-center gap-2 bg-white text-black py-3 px-4 rounded-md font-semibold hover:bg-neutral-300 transition-all duration-250">
            All our Trading Pairs{" "}
            <FaChevronRight color="black" className="mt-1 " size={16} />
          </button>
        </div>

        {/* Right Side */}
        <div className="bg-white text-black p-6 mt-3 mb-8 rounded-2xl w-full md:max-w-sm shadow-lg">
          <h3 className="text-4xl font-medium mb-4">MetaTrader 5</h3>
          <CopyField label="Login ID" value="98814844" />
          <CopyField label="Password" value="Ja0Ka8w*A" />
          <CopyField label="Server" value="NeolinCapitalMarket" />
        </div>
      </div>
    </div>
  );
};

export default RawSpreads;
