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

const WhyChoosePPF = () => {
  const cardData = [
    {
      topContent: <FaBullseye className="text-3xl text-white" />,
      title: "Realistic Targets",
      description:
        "Our model has the most competitive and realistic targets in the market. A profit target of 7% & 5% is the lowest in the industry...",
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
      title: "Up To 95% Reward Split",
      description:
        "Our traders receive an 80% default Reward split, with an option to boost it to 95% at checkout...",
    },
    {
      topContent: <FaCalendarAlt className="text-3xl text-white" />,
      title: "Bi-Weekly Rewards",
      description:
        "We offer bi-weekly Rewards as default, allowing traders to receive profits every 14 days...",
    },
    {
      topContent: <FaHeadset className="text-3xl text-white" />,
      title: "Customer Support",
      description:
        "Our dedicated customer support team is available 24/7 to assist you with any inquiries or issues...",
    },
  ];

  return (
    <section className="py-12 w-full flex flex-col items-center">
      <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold text-center mb-10">
        Why Choose PPF?
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full px-5 md:px-0 md:w-[90%] place-items-center lg:w-[80%]">
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
