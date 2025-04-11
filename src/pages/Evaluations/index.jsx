import React, { useState } from "react";
import ChallengeSelector from "./ChallengeSelector";
import AccountSizeSelector from "./AccountSizeSelector";
import SummaryCard from "./SummaryCard";
import AddOnsSelector from "./AddOnsSelector";
import BillingDetails from "./BillingDetails";
import OrderSummary from "./OrderSummary";

const CheckoutPage = () => {
  const [selectedChallenge, setSelectedChallenge] = useState("1-Step");
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSize, setSelectedSize] = useState(null);
  const [selectedAddOns, setSelectedAddOns] = useState([]);

  const challengeOptions = ["1-Step", "2-Step", "3-Step"];
  const accountSizes = [
    "5K",
    "10K",
    "25K",
    "50K",
    "100K",
    "200K",
    "300K",
    "500K",
  ];

  const addOns = [
    { id: 1, name: "95% Profit Split", price: 25 },
    { id: 2, name: "0 Minimum Trading Days", price: 15 },
    { id: 3, name: "Daily Drawdown 6%", price: 15 },
    { id: 4, name: "Max Drawdown 12%", price: 25 },
  ];
  // Dummy pricing logic
  const priceMap = {
    "5K": 25,
    "10K": 49,
    "25K": 99,
    "50K": 199,
    "100K": 349,
    "200K": 599,
    "300K": 749,
    "500K": 1200,
  };

  const handleAddonToggle = (id) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const selectedAddOnDetails = addOns.filter((addon) =>
    selectedAddOns.includes(addon.id)
  );
  const addOnsTotal = selectedAddOnDetails.reduce(
    (sum, item) => sum + item.price,
    0
  );
  const grandTotal = (priceMap[selectedSize] || 0) + addOnsTotal;

  return (
    <div className="min-h-screen  text-white md:px-6 pt-20">
      <div className="text-center">
        <h1 className="text-3xl sm:text-4xl md:text-5xl  xl:text-6xl font-bold">
          Complete Your Order
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-white/70 mt-2">
          Almost there, please fill-up all the information and get funded.
        </p>
        <div className="flex justify-center items-center gap-4 mt-6">
          <div className="flex flex-col md:flex-row items-center   space-x-3 bg-[#2B1A3B] px-4 py-2 rounded-lg font-bold">
            <div className="flex items-center space-x-3  py-2 rounded-full font-bold ">
              <span
                className={`rounded-full w-9 h-9 flex items-center justify-center font-bold ${
                  currentStep === 1
                    ? "bg-[#B557F1] text-white"
                    : "bg-white text-black"
                }`}
              >
                1
              </span>
              <span>Select Account</span>
            </div>
            <div className="h-0.5 rotate-90 md:rotate-0 w-6 md:w-20 md:ml-0 ml-6 bg-white" />
            <div className="flex items-center space-x-3  py-2 rounded-full font-bold ">
              <span
                className={`rounded-full w-9 h-9 flex items-center justify-center font-bold ${
                  currentStep === 2
                    ? "bg-[#B557F1] text-white"
                    : "bg-white text-black"
                }`}
              >
                2
              </span>
              <span>Checkout Billing</span>
            </div>
          </div>
        </div>
      </div>

      {currentStep === 1 ? (
        <div className="flex  justify-center items-center mt-10 gap-8">
          <div className="w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%] flex-col lg:flex-row items-center lg:items-start flex gap-8">
            <div className="bg-[#2B1A3F] p-8 rounded-4xl h-fit  lg:w-2/3">
              <h2 className="text-xl font-bold mb-8 text-center lg:text-left">
                Evaluation
              </h2>

              <label className="flex font-bold items-center gap-2  mb-2">
                Select Challenge <span className=" text-red-600">*</span>
              </label>
              <ChallengeSelector
                options={challengeOptions}
                selected={selectedChallenge}
                onSelect={setSelectedChallenge}
              />

              <label className="flex font-bold items-center mt-5 gap-2  mb-2">
                Account Size <span className=" text-red-600">*</span>
              </label>
              <AccountSizeSelector
                sizes={accountSizes}
                selected={selectedSize}
                onSelect={setSelectedSize}
              />

              {selectedSize && (
                <AddOnsSelector
                  addOns={addOns}
                  selected={selectedAddOns}
                  onToggle={handleAddonToggle}
                />
              )}
            </div>
            <SummaryCard
              challenge={selectedChallenge}
              accountSize={selectedSize}
              total={priceMap[selectedSize] || 0}
              addOns={selectedAddOnDetails}
              addOnsTotal={addOnsTotal}
              grandTotal={grandTotal}
              onContinue={() => setCurrentStep(2)}
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center mt-10">
          <div className="relative w-[90%] md:w-[85%] lg:w-[80%] xl:w-[70%]">
            <div className="absolute -inset-1 rounded-3xl bg-[#653979] blur-2xl opacity-20"></div>

            <div className="relative bg-[#1A001F] flex flex-col lg:flex-row gap-8 p-6 rounded-3xl z-10">
              <BillingDetails />
              <OrderSummary
                challenge={selectedChallenge}
                accountSize={selectedSize}
                total={priceMap[selectedSize] || 0}
                addOns={selectedAddOnDetails}
                addOnsTotal={addOnsTotal}
                grandTotal={grandTotal}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
