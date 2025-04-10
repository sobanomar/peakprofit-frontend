import React from "react";
import CardCarousel from "./CardCarousal";
import verfiedIcon from "../../../assets/images/home/verified_payouts/verfied_payout_card.webp";

const VerifiedPayouts = () => {
  return (
    <div className="justify-center flex px-4 sm:px-8">
      <div className="flex flex-col md:flex-row items-center md:items-start w-full md:w-[85%] gap-4 md:gap-10">
        <div className="">
          <img
            className="object-cover border h-16 w-44 sm:w-60 md:h-24 md:w-80 border-white rounded-3xl"
            src={verfiedIcon}
            alt="Verified Icon"
          />
        </div>
        <CardCarousel />
      </div>
    </div>
  );
};

export default VerifiedPayouts;
