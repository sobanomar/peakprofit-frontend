import React from "react";
import CardCarousel from "./CardCarousal";
import verfiedIcon from "../../../assets/images/home/verified_payouts/verfied_payout_card.webp";

const VerifiedPayouts = () => {
  return (
    <div className="justify-center flex">
      <div className="flex flex-col md:flex-row  items-center md:items-start md:w-[85%]">
        <div>
          <img
            className="object-cover border h-16 w-60 md:h-24 md:w-80 border-white rounded-3xl"
            src={verfiedIcon}
          />
        </div>
        <CardCarousel />
      </div>
    </div>
  );
};

export default VerifiedPayouts;
