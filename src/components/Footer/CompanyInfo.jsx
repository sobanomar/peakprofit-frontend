// components/Footer/FooterCompanyInfo.jsx
import React from "react";
import { FaDiscord, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Logo from "../Logo";

const CompanyInfo = () => {
  const socialIcons = [
    { icon: <FaFacebookF /> },
    { icon: <FaXTwitter /> },
    { icon: <FaInstagram /> },
    { icon: <FaDiscord /> },
  ];

  const paymentLogos = [
    {
      src: "https://www.mastercard.com/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg",
      alt: "Mastercard",
    },
    {
      src: "https://cdn.visa.com/v2/assets/images/logos/visa/blue/logo.png",
      alt: "Visa",
    },
    {
      src: "https://th.bing.com/th/id/OIP.lOY5kHHad1uNvbxZHnXGTgHaMP?rs=1&pid=ImgDetMain",
      alt: "Ehtereum",
    },
    {
      src: "https://th.bing.com/th/id/R.f732f82b8c21ec5bc31f973e85d2a271?rik=XK%2bgUN7dHpjxhw&pid=ImgRaw&r=0",
      alt: "Bitcoin",
    },
  ];

  return (
    <div className="space-y-4 flex flex-col">
      <Logo />
      <div className="flex space-x-3 text-xl">
        {socialIcons.map((item, index) => (
          <div key={index} className="bg-[#2b1144] rounded-full p-2">
            {item.icon}
          </div>
        ))}
      </div>
      <div className="md:text-left ">
        <p>PeakProfit LLC</p>
        <p className="font-semibold ">Company registration number: 123xyz</p>
      </div>
      <div className="flex gap-x-3 flex-row">
        {paymentLogos.map((logo, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-2 w-14 h-10 flex shadow-md"
          >
            <img
              src={logo.src}
              alt={logo.alt}
              className="h-6 w-6 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInfo;
