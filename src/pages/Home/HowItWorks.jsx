import InfoCard from "../../components/InfoCard";
import React from "react";
import Support from "../../assets/images/home/how_it_works/support.webp";
import Withdrawl from "../../assets/images/home/how_it_works/withdrawl.webp";
import Investment from "../../assets/images/home/how_it_works/investment-growth.webp";
import { Link } from "react-router";
import { GlowingCardsGrid } from "./GlowingCardsGrid";
import MainHeading from "../../components/MainHeading";

const HowItWorks = () => {
  return (
    <div className="py-20 text-center flex justify-center z-10 relative ">
      <div className="absolute top-0 left-0 w-full h-64 -z-10  bg-linear-to-b from-[#130025] to-transparent" />
      <div className="max-w-7xl px-6">
        <MainHeading>HOW IT WORKS</MainHeading>
        {/* <div className="grid grid-cols-1 place-items-center md:grid-cols-4 gap-6 p-8 ">
      
        <InfoCard
          topContent="1"
          title="Sign Up"
          description="Sign up, select your challenge, and start trading immediately."
        />
        <InfoCard
          topContent="2"
          title="Trade"
          description="Trade your account using your strategy and following our trading guidelines."
        />
        <InfoCard
          topContent="3"
          title="Get Funding"
          description="Pass our challenge and you can trade a Simulated funded account in as little as 3 days."
        />
        <InfoCard
          topContent="4"
          title="Scale Up"
          description="Scale Your Account up to $1Million in Simulated Funding."
        />

       
        <div className="md:col-span-4 flex flex-wrap justify-center gap-6">
          <InfoCard
            topContent={Withdrawl}
            isImage
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
            topContent={Support}
            isImage
            title="24/7 Support"
            description="Have questions? Our support team is always here for you!"
            status="Online"
            bottomContent={
              <Link to={"/contact"} className="text-purple-300 hover:underline">
                Help Center
              </Link>
            }
          />

          <InfoCard
            isImage
            topContent={Investment}
            title="50,000$+ Paid To Funded Traders This Month"
            description="Join a community of successful traders who have achieved their funding goals with our platform."
          />
        </div>
      </div> */}
        <GlowingCardsGrid />
      </div>
    </div>
  );
};

export default HowItWorks;
