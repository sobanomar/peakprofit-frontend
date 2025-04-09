import React from "react";
import { Link } from "react-router";

const NavBar = () => {
  return (
    <div className=" backdrop-filter backdrop-blur-lg  px-10 py-5 items-center font-semibold text-2xl rounded-3xl flex justify-between border-1 border-neutral-700 gap-x-10 ">
      <Link to="#" className=" hover:text-gray-300 transition-all duration-300">
        Home
      </Link>
      <Link to="#" className=" hover:text-gray-300 transition-all duration-300">
        Evaluations
      </Link>
      <Link to="#" className=" hover:text-gray-300 transition-all duration-300">
        FAQ
      </Link>
      <Link to="#" className=" hover:text-gray-300 transition-all duration-300">
        Contact
      </Link>
    </div>
  );
};

export default NavBar;
