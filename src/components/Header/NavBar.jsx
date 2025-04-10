import React from "react";
import { Link } from "react-router";

const NavBar = ({ mobile }) => {
  const baseLinkClasses = "hover:text-gray-300 transition-all duration-300";

  if (mobile) {
    return (
      <nav className="flex flex-col gap-4">
        <Link to="#" className={baseLinkClasses}>
          Home
        </Link>
        <Link to="/evaluation" className={baseLinkClasses}>
          Evaluations
        </Link>
        <Link to="#" className={baseLinkClasses}>
          FAQ
        </Link>
        <Link to="#" className={baseLinkClasses}>
          Contact
        </Link>
      </nav>
    );
  }

  return (
    <nav className="backdrop-filter backdrop-blur-lg px-6 py-3 md:px-10 md:py-4 items-center font-semibold text-xl md:text-2xl rounded-2xl flex justify-between border border-neutral-400 gap-x-6 md:gap-x-10 bg-[rgba(127,13,218,0.15)]">
      <Link to="#" className={baseLinkClasses}>
        Home
      </Link>
      <Link to="/evaluation" className={baseLinkClasses}>
        Evaluations
      </Link>
      <Link to="#" className={baseLinkClasses}>
        FAQ
      </Link>
      <Link to="#" className={baseLinkClasses}>
        Contact
      </Link>
    </nav>
  );
};

export default NavBar;
