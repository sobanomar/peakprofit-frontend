import React from "react";
import { Link } from "react-router";

const Logo = ({ color }) => {
  let logoColor;
  color ? (logoColor = `text-${color}`) : "text-black";
  return (
    <Link className="" to={"/"}>
      <img
        className="w-60 md:w-80 object-cover"
        src="/logo/PeakProfitLogoHorizontal.png"
      />
    </Link>
  );
};

export default Logo;
