import React from "react";
import { Link } from "react-router";

const Logo = ({ color }) => {
  let logoColor;
  color ? (logoColor = `text-${color}`) : "text-black";
  return (
    <Link to={"/"}>
      <h1 className={"text-2xl font-semibold " + logoColor}>PeakProfit</h1>
    </Link>
  );
};

export default Logo;
