import React from "react";
import { Link } from "react-router";

const NavBar = ({ mobile }) => {
  const baseLinkClasses =
    "hover:text-gray-300 text-xl transition-all duration-300";

  if (mobile) {
    return (
      <nav className="flex flex-col gap-4">
        <Link to="/" className={baseLinkClasses}>
          Home
        </Link>
        <Link to="/evaluation" className={baseLinkClasses}>
          Evaluations
        </Link>
        <Link to="/faq" className={baseLinkClasses}>
          FAQ
        </Link>
        <Link to="/contact" className={baseLinkClasses}>
          Contact
        </Link>
      </nav>
    );
  }

  return (
    <nav className="backdrop-filter backdrop-blur-lg px-6 py-3 md:px-10 md:py-4 items-center font-semibold text-xl md:text-2xl rounded-3xl flex justify-between border border-neutral-700 gap-x-6 md:gap-x-10 bg-[rgba(127,13,218,0.1)]">
      <Link to="/" className={baseLinkClasses}>
        Home
      </Link>
      <Link to="/evaluation" className={baseLinkClasses}>
        Evaluations
      </Link>
      <Link to="/faq" className={baseLinkClasses}>
        FAQ
      </Link>
      <Link to="/contact" className={baseLinkClasses}>
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
