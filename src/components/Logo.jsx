import React from "react";
import { Link } from "react-router";
import LogoImage from "../assets/PeakProfitLogo2.0.png";

const Logo = ({ color }) => {
  let logoColor;
  color ? (logoColor = `text-${color}`) : "text-black";
  return (
    <Link className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 " to={"/"}>
      {/* <h1 className={"text-2xl font-semibold " + logoColor}>PeakProfit</h1> */}
      <img src={LogoImage} />
    </Link>
  );
};

export default Logo;
