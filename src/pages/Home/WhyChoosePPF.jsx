import React from "react";
import InfoCard from "../../components/InfoCard";

// Icons from react-icons
import {
  FaBullseye,
  FaRocket,
  FaMoneyCheckAlt,
  FaCalendarAlt,
  FaHeadset,
} from "react-icons/fa";
import { BsXDiamond } from "react-icons/bs";
import MainHeading from "../../components/MainHeading";

const WhyChoosePPF = () => {
  const cardData = [
    {
      topContent: <FaBullseye className="text-3xl text-white" />,
      title: "Realistic Targets",
      description:
        "Our model has the most competitive and realistic targets in the market. A profit target of 8% is the lowest in the industry...",
    },
    {
      topContent: <FaRocket className="text-3xl text-white" />,
      title: "Scaling Plan",
      description:
        "We offer our Funded traders the ability to scale their account up to $1,000,000. Simply make 15% profit over 3 months...",
    },
    {
      topContent: <FaMoneyCheckAlt className="text-3xl text-white" />,
      title: "Quick and Reliable Rewards",
      description:
        "At PeakProfit, we process Rewards swiftly and efficiently. We maintain robust reserves to guarantee smooth operations...",
    },
    {
      topContent: <BsXDiamond className="text-3xl text-white" />,
      title: "Upto 85% Reward Split",
      description:
        "Our traders receive an 80% default Reward split, with an option to boost it to 85%...",
    },
    {
      topContent: <FaCalendarAlt className="text-3xl text-white" />,
      title: "Weekly Rewards",
      description:
        "We offer weekly Rewards as default, allowing traders to receive profits every 5-7 days...",
    },
    {
      topContent: <FaHeadset className="text-3xl text-white" />,
      title: "Customer Support",
      description:
        "Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues...",
    },
  ];

  return (
    <section className=" w-full px-6 py-20 flex flex-col items-center">
      <MainHeading>WHY CHOOSE PPF</MainHeading>
      <div className="grid grid-cols-1 place-items-center md:grid-cols-2 lg:grid-cols-3 gap-6  max-w-7xl   ">
        {cardData.map((card, index) => (
          <InfoCard
            key={index}
            topContent={card.topContent}
            title={card.title}
            description={card.description}
            align="left"
          />
        ))}
      </div>
    </section>
  );
};

export default WhyChoosePPF;
