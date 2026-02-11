import React from "react";
import { Link } from "react-router";
import LogoImage from "../assets/PeakProfitLogo2.0.png";

const Logo = ({ color }) => {
  let logoColor;
  color ? (logoColor = `text-${color}`) : "text-black";
  return <img src="/logo/PeakProfitLogoHorizontal.png" />;
};

export default Logo;
