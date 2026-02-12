import { useState, useEffect } from "react";

import NavBar from "./NavBar";
import { FaUser, FaBars, FaTimes } from "react-icons/fa";
import Logo from "../Logo";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showLogo, setShowLogo] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (window.innerWidth < 1024) {
        // Only apply for mobile/tablets
        if (currentScrollY > lastScrollY && currentScrollY > 50) {
          // scrolling down
          setShowLogo(false);
        } else {
          // scrolling up
          setShowLogo(true);
        }
        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className="fixed w-full z-50 backdrop-filter backdrop-blur-lg  py-4 bg-gray-950/10">
      <div className="px-4 sm:px-8">
        <div className="flex justify-between items-center text-white transition-all duration-300 ease-in-out">
          {/* Conditionally render logo on scroll */}
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
      </div>
    </header>
  );
};

export default Header;
