import { useState } from "react";
import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

const SummaryCard = ({
  challenge,
  accountSize,
  total,
  addOns = [],
  addOnsTotal = 0,
  grandTotal = 0,
  onContinue,
  selectedSize,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="bg-[#2B1A3F] p-8 rounded-4xl h-fit text-white max-w-md w-full transition-all duration-300">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Total Summary</h2>
        <button
          className="bg-[#CF59FF] cursor-pointer rounded-full px-0.5 py-0.5"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <HiChevronUp size={22} /> : <HiChevronDown size={22} />}
        </button>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="accordion-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="bg-[#C945F7] px-4 py-1 rounded text-white font-semibold mb-2 flex justify-between">
              <span>Name</span>
              <span>Total</span>
            </div>
            <div className="mb-2 flex justify-between py-2 border-b dotted-gap-border">
              <span>Select Challenge</span>
              <span>{challenge}</span>
            </div>

            <div className="mb-2 flex justify-between border-b dotted-gap-border py-2">
              <div className="flex flex-col gap-2">
                <span>Account Size</span>
                {accountSize && (
                  <span className="text-sm text-neutral-500">
                    {accountSize}
                  </span>
                )}
              </div>
              <span>{accountSize ? `$ ${total}` : "$ 0.00"}</span>
            </div>

            {/* Add-Ons List */}
            {addOns.length > 0 && (
              <div className="dotted-gap-border pb-2 mb-2 mt-4">
                <div className="mb-2 flex justify-between py-2">
                  <span>Add ons</span>
                  <span>${addOnsTotal}</span>
                </div>
                {addOns.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between text-sm mt-1 px-4 text-neutral-400"
                  >
                    <span>{item.name}</span>
                    <span>${item.price}</span>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      <div className="text-2xl pb-2 px-4 border-b border-neutral-700 pt-4 font-bold flex justify-between mt-4">
        <span>Grand Total</span>
        <span>${grandTotal.toFixed(2)}</span>
      </div>
      <button
        disabled={!selectedSize}
        className={`w-full py-2 px-4 mt-6 rounded-full font-semibold transition 
    ${
      selectedSize
        ? "bg-[#C945F7] text-white cursor-pointer hover:bg-[#b534e2]"
        : "bg-purple-700 text-gray-400 cursor-not-allowed"
    }
  `}
        onClick={onContinue}
      >
        Continue To Checkout
      </button>
    </div>
  );
};

export default SummaryCard;
