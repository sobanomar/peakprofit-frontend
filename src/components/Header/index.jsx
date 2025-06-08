import React, { useState } from "react";
import Logo from "../Logo";
import NavBar from "./NavBar";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed w-full z-50 px-4 sm:px-8 mt-8">
      <div className="flex justify-between items-center text-white">
        <Logo />

        {/* Desktop Nav */}
        <div className="hidden lg:flex">
          <NavBar />
        </div>

        {/* Desktop Client Area Button */}
        <a
          href="https://dashboard.peakprofitfunding.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:flex cursor-pointer bg-[#7F0DDA] rounded-full py-2 px-6 md:py-4 md:px-10 gap-x-2 items-center font-semibold"
        >
          Client Area
          <FaUser size={18} color="b45ecf" />
        </a>

        {/* Hamburger Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden mt-4 bg-[#472C64] rounded-xl py-4 px-6 space-y-4 text-white font-semibold text-lg shadow-lg">
          <NavBar mobile />

          {/* Client Area button in menu */}
          <a
            href="https://dashboard.peakprofitfunding.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center cursor-pointer bg-[#7F0DDA] rounded-full py-3 px-6 gap-2"
          >
            <span>Client Area</span>
            <FaUser size={18} color="b45ecf" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
