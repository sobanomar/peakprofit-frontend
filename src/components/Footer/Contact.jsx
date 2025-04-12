// components/Footer/FooterContact.jsx
import React from "react";
import { FaMapMarkerAlt, FaComments, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="md:pl-6">
      <h3 className="text-lg font-semibold mb-4 ">CONTACT US</h3>
      <ul className="space-y-2 flex flex-col">
        <li className="flex ">
          <span className="text-sm text-[#888794] font-semibold">
            1111 South Bayshore Drive, Miami, FL, USA
          </span>
        </li>
        <li className=" text-white text-sm font-semibold ">
          <p className="mb-1">Live chat support during working hours</p>
          <span>support@peakprofitllc.com</span>
        </li>
        <li className="flex items-start"></li>
      </ul>
      <p className="text-xs mt-2 md:mt-16 text-white font-semibold ">
        Copyright © {new Date().getFullYear()} PPF. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
