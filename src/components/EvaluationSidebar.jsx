import React from "react";
import AnimatedButton from "./AnimatedButton";
import { useNavigate } from "react-router";
import Venus from "../assets/images/home/planets/venus.webp";

const EvaluationSidebar = ({
  accountSize = "$10,000",
  discountedFee = "$39.60",
  originalFee = "$99.00",
  selectedAccountSize = "$100K", // New prop for selected account size
}) => {
  const navigate = useNavigate();

  const handleStartEvaluation = () => {
    navigate("/evaluation");
  };

  // Helper function to convert "$100K" to "$100,000"
  const formatAccountSize = (size) => {
    const match = size.match(/\$?([\d.]+)([kK])/); // match "$100K" or "100k"
    if (!match) return size;

    const number = parseFloat(match[1]) * 1000;
    return `$${number.toLocaleString()}`;
  };

  const addOns = [
    { label: "Daily Drawdown 6%", price: "15%" },
    { label: "Max Drawdown 12%", price: "25%" },
    { label: "95% Profit Split", price: "25%" },
    { label: "0 Minimum Days", price: "15%" },
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
      src: "https://th.bing.com/th/id/R.f732f82b8c21ec5bc31f973e85d2a271?rik=XK%2bgUN7dHpjxhw&pid=ImgRaw&r=0",
      alt: "Bitcoin",
    },
    {
      src: "https://www.mastercard.com/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg",
      alt: "Mastercard",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Venus Challenge Card */}
      <div className="relative rounded-xl overflow-hidden p-4 bg-[#1D0D2F] border border-[#3A245A] shadow-[0_0_30px_5px_rgba(174,48,255,0.3)]">
        {/* Floating label */}
        <div className="absolute top-4 left-4 z-10 bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full flex items-center gap-2 text-white text-sm font-semibold">
          <span className="text-blue-300">💎</span> VENUS CHALLENGE
        </div>
        {/* Background Floating Logos */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
          {paymentLogos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="floating-logo object-contain"
            />
          ))}
        </div>

        {/* Venus with glow */}
        <div className="relative z-20 flex justify-center py-10">
          <div className="venus-glow" />
          <img
            src={Venus}
            alt="Venus"
            className="w-40 h-40 relative planet-float"
          />
        </div>

        {/* Purple glow under card */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-60 h-20 bg-[#AE30FF] opacity-30 blur-3xl rounded-full z-0" />
      </div>

      {/* Account Size Card - Now shows the selected account size */}
      <p className="text-xl font-semibold mb-2 text-white">Account size</p>
      <div className="bg-[#2C193E] p-6 rounded-2xl text-white text-center shadow-md">
        <p className="text-5xl font-bold">
          {formatAccountSize(selectedAccountSize)}
        </p>
      </div>

      {/* Refundable Fee Card */}
      <div className="bg-[#2C193E] p-6 rounded-2xl text-white text-center shadow-md">
        <p className="text-xl font-semibold mb-2">*Refundable fee</p>
        <div className="flex gap-2 items-center justify-center mb-4">
          <p className="text-xl line-through text-gray-400">{originalFee}</p>
          <p className="text-5xl font-bold text-white ">{discountedFee}</p>
        </div>

        <AnimatedButton
          text={"Start Evaluation →"}
          action={handleStartEvaluation}
        />
        <p className="text-xs text-gray-400 mt-2">
          Complete Your Evaluation to Become a Funded Trader
        </p>
      </div>

      {/* Add-ons */}
      {/* <p className="text-xl text-white font-semibold mb-4">Add-ons</p>
      <div className="flex flex-col gap-0.5">
        {addOns.map((addon, index) => (
          <div
            key={index}
            className="flex bg-[#2C193E] text-white px-4 rounded-xl justify-between items-center"
          >
            <span className="py-2">{addon.label}</span>
            <span className="bg-[#AE30FF] px-3 py-1 rounded-full text-sm font-semibold">
              {addon.price}
            </span>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default EvaluationSidebar;
