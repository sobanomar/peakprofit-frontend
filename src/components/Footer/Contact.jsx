// components/Footer/FooterContact.jsx
import React from "react";
import { FaMapMarkerAlt, FaComments, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="">
      <h3 className="text-lg font-semibold mb-4 text-center">CONTACT US</h3>
      <ul className="space-y-2 flex flex-col items-center">
        <li className="flex ">
          <span className="text-sm text-[#888794] font-semibold">
            UAE Silicon Oasis Building 28, 5th floor
          </span>
        </li>
        <li className="text-center text-white text-sm font-semibold ">
          <p className="mb-1">Live chat support during working hours</p>
          <span>support@getcryptofunded.com</span>
        </li>
        <li className="flex items-start"></li>
      </ul>
      <p className="text-xs mt-16 text-white font-semibold text-center">
        Copyright © {new Date().getFullYear()} GCF. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
