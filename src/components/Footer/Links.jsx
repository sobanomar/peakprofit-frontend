// components/Footer/FooterLinks.jsx
import React from "react";
import { Link } from "react-router"; // Fixed import from "react-router"

const Links = () => {
  const links = [
    { name: "Terms & Services", path: "/terms-and-services" },
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Refund Policy", path: "/refund-policy" },
  ];

  return (
    <div>
      <ul className="space-y-2 flex justify-between gap-x-5">
        {links.map((link, index) => (
          <li key={index} className="text-[#888794]">
            <Link
              to={link.path}
              className="text-sm text-gray-300 hover:text-white transition-all duration-100
                         hover:underline hover:underline-offset-4 hover:decoration-blue-500"
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Links;
