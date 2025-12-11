import React from "react";
import { HiChevronDown, HiChevronUp } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";

export default function OrderSummary({
  isOpen,
  toggleOpen,
  selectedName,
  accountSize,
  cost,
  isDisabled,
  onContinue,
  loading,
}) {
  return (
    <div className="bg-[#1A082C] dark:text-white text-black shadow-lg border border-white/[0.05]  p-8 rounded-2xl h-fit max-w-md w-full transition-all duration-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Total Summary</h2>

        <button
          className="bg-purple-500/20 dark:bg-purple-500/30 cursor-pointer rounded-full p-1"
          onClick={toggleOpen}
        >
          {isOpen ? <HiChevronUp size={22} /> : <HiChevronDown size={22} />}
        </button>
      </div>

      {/* Collapsible */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="summary-content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            {/* Header Row */}
            <div className="bg-purple-600 text-white px-4 py-1 rounded-md font-semibold mb-3 flex justify-between">
              <span>Name</span>
              <span>Total</span>
            </div>

            {/* Selected Challenge */}
            <div className="mb-3 flex justify-between py-2 border-b border-dashed border-gray-400 dark:border-gray-600">
              <span>Select Challenge</span>
              <span>{selectedName}</span>
            </div>

            {/* Account Size */}
            <div className="mb-2 flex justify-between py-2 border-b border-dashed border-gray-400 dark:border-gray-600">
              <div className="flex flex-col gap-1">
                <span>Account Size</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  ${accountSize.toLocaleString()}
                </span>
              </div>

              <span className="font-medium">${cost.toLocaleString()}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Grand Total */}
      <div className="text-2xl pb-2 px-4 border-b border-gray-300 dark:border-gray-700 pt-4 font-bold flex justify-between mt-4">
        <span>Grand Total</span>
        <span>${cost.toFixed(2)}</span>
      </div>

      {/* Continue Button */}
      <button
        disabled={isDisabled || loading}
        onClick={onContinue}
        className={`w-full py-2 px-4 mt-6 rounded-full font-semibold transition ${
          isDisabled
            ? "bg-gray-300 dark:bg-gray-700 text-gray-500 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700 text-white cursor-pointer"
        }`}
      >
        {loading ? "Processing..." : "Continue To Checkout"}
      </button>
    </div>
  );
}
