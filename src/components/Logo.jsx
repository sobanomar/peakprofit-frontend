import React from "react";

const Logo = ({ color }) => {
  let logoColor;
  color ? (logoColor = `text-${color}`) : "text-black";
  return (
    <div>
      <h1 className={"text-2xl font-semibold " + logoColor}>PeakProfit</h1>
    </div>
  );
};

export default Logo;
