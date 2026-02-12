import React from "react";
import { Link } from "react-router";
import LogoImage from "../assets/PeakProfitLogo2.0.png";

const LogoBlack = ({ color }) => {
  let logoColor;
  color ? (logoColor = `text-${color}`) : "text-black";
  return (
    <Link className="" to={"/"}>
      <img
        className="w-40 sm:w-60 md:w-80"
        src="/logo/PeakProfitLogoHorizontalBlack.png"
      />
    </Link>
  );
};

export default LogoBlack;
