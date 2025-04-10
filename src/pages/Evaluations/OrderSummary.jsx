import React, { useState } from "react";
import UnlistedFirm from "../../assets/images/home/Unlisted_Firm.webp";

export default function OrderSummary({
  challenge,
  accountSize,
  total,
  addOns = [],
  addOnsTotal = 0,
  grandTotal = 0,
}) {
  const [selectedPayment, setSelectedPayment] = useState("crypto");

  return (
    <div className="min-h-screen flex items-center justify-center p-4 transition-all duration-500">
      <div className="max-w-md w-full text-white rounded-2xl overflow-hidden">
        {/* Order Summary Section */}
        <div className="mb-4 rounded-2xl border-[#3A2A3D]">
          <h2 className="text-2xl mt-2 pb-2 font-semibold mb-4">Your order</h2>
          <div className="text-sm w-full">
            <div className="grid grid-cols-2 text-left text-white font-semibold border border-[#3A2A3D]">
              <div className="border-r border-[#3A2A3D] p-3">Product</div>
              <div className="p-3">Subtotal</div>
            </div>

            <div className="grid grid-cols-2 border-x border-b border-[#3A2A3D]">
              <div className="border-r border-[#3A2A3D] p-3">
                <p className="font-medium">Evaluation × 1</p>
                <p className="font-semibold text-sm">
                  Evaluation:{" "}
                  <span className="font-normal">
                    Select Challenge ({challenge})
                  </span>
                  <br /> Account Size ({accountSize}) ${total.toFixed(2)}
                  {addOns.length > 0 && (
                    <>
                      <br /> Add-ons ({addOns.map((a) => a.name).join(", ")}) $
                      {addOnsTotal.toFixed(2)}
                    </>
                  )}
                  <br /> Grand Total ${grandTotal.toFixed(2)}
                </p>
              </div>
              <div className="p-3 self-center">{grandTotal.toFixed(2)} $</div>
            </div>

            <div className="grid grid-cols-2 border-x border-b border-[#3A2A3D] p-3">
              <p className="">Subtotal</p>
              <p className="text-right">{grandTotal.toFixed(2)} $</p>
            </div>

            <div className="grid grid-cols-2 border-x border-b border-[#3A2A3D] p-3">
              <p className="font-semibold">Total</p>
              <p className="text-right font-semibold">
                {grandTotal.toFixed(2)} $
              </p>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="p-6 space-y-4 bg-[#0F101E]">
          <div>
            {/* Crypto */}
            <label className="flex items-center space-x-2">
              <input
                type="radio"
                name="payment"
                value="crypto"
                checked={selectedPayment === "crypto"}
                onChange={() => setSelectedPayment("crypto")}
                className="accent-[#653979]"
              />
              <span>Crypto currency payment</span>
            </label>
            {selectedPayment === "crypto" && (
              <div className="bg-[#010314] text-white mt-2 p-2 rounded-md text-sm">
                Pay via crypto
              </div>
            )}

            {/* Credit Card */}
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="radio"
                name="payment"
                value="card"
                checked={selectedPayment === "card"}
                onChange={() => setSelectedPayment("card")}
                className="accent-[#653979]"
              />
              <span>Credit Card</span>
            </label>
            {selectedPayment === "card" && (
              <div className="bg-[#010314] text-white mt-2 p-2 rounded-md text-sm">
                Pay via credit card
              </div>
            )}

            {/* Credit Card (Worldwide) */}
            <label className="flex items-center space-x-2 mt-2">
              <input
                type="radio"
                name="payment"
                value="creditCardWorldwide"
                checked={selectedPayment === "creditCardWorldwide"}
                onChange={() => setSelectedPayment("creditCardWorldwide")}
                className="accent-[#653979]"
              />
              <span>Credit Card (Worldwide)</span>
            </label>
            {selectedPayment === "creditCardWorldwide" && (
              <div className="bg-[#010314] text-white mt-2 p-2 rounded-md text-sm">
                Pay via credit card (worldwide)
              </div>
            )}
          </div>

          {/* Privacy and Button */}
          <p className="text-xs text-gray-400">
            Your personal data will be used to process your order, support your
            experience throughout this website, and for other purposes described
            in our{" "}
            <a href="#" className="text-[#653979] underline">
              privacy policy
            </a>
            .
          </p>

          <button className="w-full bg-white text-black py-2 rounded-full transition-color font-semibold hover:bg-[#010314] hover:text-white duration-300">
            Start Your Evaluation
          </button>

          <div className="text-center text-xs mt-2 text-gray-400">
            🔐 100% Secure Checkout — Your data is protected.
          </div>
        </div>

        {/* Branding Logos */}
        <div className="flex justify-between items-center p-4">
          <img src={UnlistedFirm} alt="Unlisted Firm" className="h-14" />
          <img src={UnlistedFirm} alt="Trading Pilot" className="h-14" />
        </div>
      </div>
    </div>
  );
}
