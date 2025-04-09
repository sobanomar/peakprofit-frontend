import React from "react";
import Logo from "../Logo";
import NavBar from "./NavBar";
import { FaUser } from "react-icons/fa";

const Header = () => {
  return (
    <div className="flex fixed w-full justify-between mt-10 px-8 items-center text-white z-50">
      <Logo />
      <NavBar />
      <div className="bg-[#7F0DDA] rounded-full py-4 px-10 flex gap-x-2 items-center font-semibold">
        Client Area
        <FaUser size={20} color="b45ecf" />
      </div>
    </div>
  );
};

export default Header;
