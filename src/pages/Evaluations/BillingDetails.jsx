import React from "react";

const BillingDetails = () => {
  return (
    <div className="bg-[#1A001F] text-white p-6 rounded-xl max-w-2xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6 border-b border-[#3A2A3D] pb-2">
        Billing details
      </h2>

      <form className="space-y-5">
        <div>
          <label className="block mb-1 text-sm font-medium">
            Email address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            className="w-full bg-[#0F101E] border border-gray-700 focus:border-[#5C6728] focus:outline-none px-4 py-2 rounded-md"
          />
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">
              First name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-[#0F101E] border border-gray-700 focus:border-[#5C6728] focus:outline-none px-4 py-2 rounded-md"
            />
          </div>
          <div className="w-full">
            <label className="block mb-1 text-sm font-medium">
              Last name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-[#0F101E] border border-gray-700 focus:border-[#5C6728] focus:outline-none px-4 py-2 rounded-md"
            />
          </div>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Country / Region <span className="text-red-500">*</span>
          </label>
          <select className="w-full bg-[#0F101E] border border-gray-700 focus:border-[#5C6728] focus:outline-none px-4 py-2 rounded-md">
            <option>Uganda</option>
            {/* Add more countries if needed */}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Street address <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full bg-[#0F101E] border border-gray-700 focus:border-[#5C6728] focus:outline-none px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Town / Village <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            className="w-full bg-[#0F101E] border border-gray-700 focus:border-[#5C6728] focus:outline-none px-4 py-2 rounded-md"
          />
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            District <span className="text-red-500">*</span>
          </label>
          <select className="w-full bg-[#0F101E] border border-gray-700 focus:border-[#5C6728] focus:outline-none px-4 py-2 rounded-md">
            <option>Nakasongola</option>
            {/* Add more districts as needed */}
          </select>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">
            Phone <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            className="w-full bg-[#0F101E] border border-gray-700 focus:border-[#5C6728] focus:outline-none px-4 py-2 rounded-md"
          />
        </div>
      </form>
    </div>
  );
};

export default BillingDetails;
