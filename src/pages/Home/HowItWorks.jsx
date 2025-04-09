import InfoCard from "../../components/InfoCard";
import React from "react";

const HowItWorks = () => {
  return (
    <div className="my-20">
      <h1 className="text-6xl text-center text-white font-semibold">
        How it Works
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-8">
        {/* Top 4 Steps */}
        <InfoCard
          topContent="1"
          title="Sign Up"
          description="Sign up to receive your account and start trading in as little as 5 minutes."
        />
        <InfoCard
          topContent="2"
          title="Trade"
          description="Trade your account using your strategy and following our trading guidelines."
        />
        <InfoCard
          topContent="3"
          title="Get Funding"
          description="Pass our challenge and you can trade a Simulated funded account in as little as 2 days."
        />
        <InfoCard
          topContent="4"
          title="Scale Up"
          description="Scale Your Account up to $1Million in Simulated Funding."
        />

        {/* Bottom 3 Centered Cards */}
        <div className="md:col-span-4 flex flex-wrap justify-center gap-6">
          <InfoCard
            topContent="https://getcryptofunded.com/wp-content/uploads/2025/02/Screenshot_2025-01-15_at_19.13.08-removebg-preview-e1736961283300.png"
            title="Swift Withdrawals"
            description="Withdraw instantly, anytime you need it. Withdraw your rewards without any delays."
            bottomContent={
              <div className="mt-4 bg-[#463455] opacity-75 text-sm text-gray-300 px-8 py-3 rounded-lg">
                Average Processing Time:{" "}
                <span className="text-white font-semibold">2–12 Hours</span>
              </div>
            }
          />

          <InfoCard
            topContent="https://getcryptofunded.com/wp-content/uploads/2025/02/support.png"
            title="24/7 Support"
            description="Have questions? Our support team is always here for you!"
            status="Online"
            bottomContent={
              <a href="#" className="text-purple-300 hover:underline">
                Help Center
              </a>
            }
          />

          <InfoCard
            topContent="https://getcryptofunded.com/wp-content/uploads/2025/01/investment-growth.png"
            title="50,000$+ Paid To Funded Traders This Month"
            description="Join a community of successful traders who have achieved their funding goals with our platform."
          />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
