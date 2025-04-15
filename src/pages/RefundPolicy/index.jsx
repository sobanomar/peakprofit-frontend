import React from "react";

const sections = [
  {
    title: "Refund Policy",
    content: [
      "This document outlines our refund, withdrawal, and dispute resolution policies. Please review this information carefully before using our services.",
    ],
  },
  {
    title: "1. Right to Withdraw from a Contract",
    content: [
      "1.1 If you are a consumer, you have the right to withdraw from the contract without providing any reason within 14 days of its execution (see Clause 2.10 for details on the agreement execution time). If you begin demo trading before the 14-day period expires, you forfeit your right to withdraw from the contract.",
      "1.2 To exercise your right of withdrawal, you must send your request to Support@PeakProfit.com within the 14-day period. We will promptly confirm receipt of your withdrawal. Upon withdrawal, we will refund any fees paid by you without undue delay, but no later than 14 days from receiving your withdrawal request, using the same method you initially used for payment.",
      "1.3 PeakProfit reserves the right to withdraw from the contract immediately if you breach any of the conditions specified in Clause 10.",
    ],
  },
  {
    title: "2. Defective Services",
    content: [
      "2.1 If the services provided by PeakProfit do not meet the agreed terms or have not been delivered as expected, you have the right to report the defect. We do not offer any guarantees on the quality of our services. Please notify us immediately of any defect at Support@PeakProfit.com. When reporting a defect, you may request either a remedy for the defect or a reasonable discount. If the defect cannot be resolved, you can withdraw from the contract or claim a discount.",
      "2.2 We will address any complaints as quickly as possible, but no later than 30 calendar days from the receipt of the complaint. A written confirmation of receipt and resolution will be provided. Should we fail to resolve the issue within this timeframe, you may withdraw from the contract. Complaints can be filed via email at Support@PeakProfit.com.",
    ],
  },
  {
    title: "3. Fees and Refunds",
    content: [
      "3.1 The fees paid for accessing the PeakProfit Trading Challenge or related services are non-refundable. This includes situations where you cancel your account, discontinue the services prematurely, fail to meet the Trading Challenge or Verification conditions, or breach any terms outlined in the policy.",
      "3.2 If a customer files an unjustified dispute or chargeback through their bank or payment provider for any fees paid, PeakProfit reserves the right to discontinue services to the customer and refuse any future service provision.",
      "3.3 Your selection of the PeakProfit Trading Challenge option at the time of order will apply to all subsequent services, including Verification. Once selected, this choice is final and cannot be modified.",
      "3.4 PeakProfit reserves the right to change fees and service parameters at any time. Changes will not affect services purchased before the notification of the change.",
    ],
  },
  {
    title: "4. Cancellation",
    content: [
      "4.1 You may request the cancellation of your account at any time by sending an email to Support@PeakProfit.com. Once the request is received, we will immediately confirm the cancellation, and the contract will be terminated. Please note that no refunds will be provided for any fees paid prior to the cancellation.",
      "4.2 Upon payment of the fee for the PeakProfit Trading Challenge, your login details for the Trading Platform will be sent to your registered email. The challenge begins when you place your first demo trade.",
    ],
  },
  {
    title: "5. Dispute Resolution",
    content: [
      "5.1 At PeakProfit, we strive for customer satisfaction. If you have any complaints or suggestions, we are happy to assist you. Please contact us at Support@PeakProfit.com.",
    ],
  },
];

const RefundPolicy = () => {
  return (
    <div className="text-white p-6 md:p-8 lg:pt-20 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 pb-4 border-b border-purple-500">
        Refund Policy
      </h1>

      {sections.map((section, index) => (
        <div key={index} className="mb-6">
          <h2
            className={`${
              index === 0 ? "text-3xl" : "text-2xl"
            } font-semibold mb-3`}
          >
            {section.title}
          </h2>
          {section.content.map((paragraph, pIndex) => (
            <p key={pIndex} className="mb-2 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      ))}

      <p className="text-center mt-8">
        For more information, feel free to contact us at Support@PeakProfit.com
      </p>
    </div>
  );
};

export default RefundPolicy;
