import React from "react";

const sections = [
  {
    title: 'General Terms and Conditions ("GTC")',
    content: [
      'These General Terms and Conditions ("GTC") govern the rights and obligations regarding the use of services provided by PeakProfit (the "Services") through the website PeakProfit.com (the "Website"). By using our Services, you agree to comply with the terms outlined below. Please do not proceed if you do not agree with any portion of these Terms.',
    ],
  },
  {
    title: "1. Introductory Provisions",
    content: [
      '1.1 These GTC regulate the relationship between you (the "Customer") and PeakProfit (the "Provider").',
      "1.2 By registering or using the Services, you enter into a contractual agreement with the Provider, and these GTC become a binding part of that contract.",
      "1.3 The Services are only available to individuals over the age of 18. By registering, you confirm that you meet this age requirement and are accessing the Services in a jurisdiction where they are legal.",
      "1.4 PeakProfit provides simulated trading tools and educational materials. All trading activities conducted on the platform are simulations, using fictitious funds with no real monetary value. Profits and losses made during simulation trading have no real-world impact.",
      "1.5 PeakProfit does not provide investment services or advice. Any information or tools provided are for educational purposes only and should not be interpreted as financial advice.",
      "1.6 Your personal data is handled in accordance with our Privacy Policy.",
      "1.7 Definitions used in this document are clarified in Clause 18.",
    ],
  },
  {
    title: "2. Services and Their Order",
    content: [
      "2.1 You can order Services by completing a registration or order form. After registration, we will provide login details for your Client Section and Trading Platform.",
      "2.2 Services include, but are not limited to, the Free Trial, PeakProfit Trading Challenge, and Simulated Funded Accounts. Specific conditions may apply depending on the Service you select.",
      "2.3 You are responsible for providing accurate and up-to-date information when registering or ordering Services. PeakProfit is not responsible for verifying the accuracy of your data.",
      "2.4 If you provide a tax registration number or other identification details, you acknowledge that you are considered an entrepreneur or trader for the purposes of these GTC.",
      "2.5 Fees for the PeakProfit Trading Challenge vary based on factors like initial capital, acceptable risk, and other configurations. You can find detailed information about fees on our website.",
      "2.6 Fees are non-refundable unless otherwise stated. This applies if you cancel your Client Section, terminate Services prematurely, or fail to complete the Trading Challenge or Simulated Funded Account.",
      "2.7 If you lodge an unjustifiable complaint or dispute your fee through your bank, PeakProfit reserves the right to cease providing you Services and to deny future service requests.",
      "2.8 Your chosen PeakProfit Trading Challenge applies to the subsequent Simulated Funded Account. Once selected, it cannot be changed.",
      "2.9 PeakProfit reserves the right to modify fees and service parameters, but any changes will not affect previously purchased Services.",
    ],
  },
  {
    title: "3. Payment Terms",
    content: [
      "3.1 Fees are charged in USD or other currencies available on the Website. Exchange rates apply if you pay in another currency.",
      "3.2 All applicable taxes are included in service charges.",
      "3.3 Payments can be made via credit card, cryptocurrency, or other methods offered on the Website.",
      "3.4 Fees must be fully credited to PeakProfit before Services are activated. If payment is not received, PeakProfit reserves the right to cancel your order.",
    ],
  },
  {
    title: "4. Client Section",
    content: [
      "4.1 You are permitted one Client Section, and all Services must be managed through this section.",
      "4.2 PeakProfit may limit the total number of Trading Challenges and Simulated Funded Accounts per Client Section.",
      "4.3 You are responsible for maintaining the confidentiality of your login information.",
      "4.4 PeakProfit does not guarantee continuous access to the Client Section or Trading Platform due to potential maintenance or operational interruptions.",
      "4.5 You can request to cancel your Client Section by emailing Support@PeakProfit.com. No refunds are provided for any fees paid prior to cancellation.",
    ],
  },
  {
    title: "5. Rules of Demo Trading",
    content: [
      "5.1 You may perform any trades during demo trading unless these constitute forbidden trading practices, as outlined in Clause 5.4.",
      "5.2 PeakProfit has access to your demo trading activity and may share this information with its affiliates.",
      "5.3 PeakProfit is not responsible for the accuracy of information provided on the Trading Platform.",
      "5.4 Forbidden Trading Practices include exploiting platform errors, using external data feeds, or engaging in any manipulative trading strategies.",
      "5.5 If you engage in Forbidden Trading Practices, PeakProfit reserves the right to cancel your Services and terminate your account.",
    ],
  },
  {
    title: "6. PeakProfit Trading Challenge and Simulated Funded Account",
    content: [
      "6.1 Upon successful payment, you will receive login details to begin the PeakProfit Trading Challenge.",
      "6.2 The Trading Challenge conditions must be met by the end of the challenge period, as outlined on the Website.",
      "6.3 If the conditions are met and no rules are violated, the Simulated Funded Account will be provided free of charge.",
    ],
  },
  {
    title: "7. PeakProfit Trader",
    content: [
      "If you successfully complete both the Challenge and the Simulated Funded Account, you may be offered a contract by a third-party provider to join the PeakProfit Trader Program. PeakProfit is not involved in these third-party agreements.",
    ],
  },
  {
    title: "8. Use of Website and Content",
    content: [
      "8.1 The Website and all related content, including applications and data, are protected by copyright and other legal regulations. PeakProfit grants you limited rights to use the content for personal use only.",
      "8.2 All trademarks and logos remain the property of PeakProfit or its licensors.",
      "8.3 You are prohibited from using any tools or methods that may harm the Website or Services.",
    ],
  },
  {
    title: "9. Disclaimer",
    content: [
      '9.1 The Services are provided "as is." PeakProfit makes no guarantees regarding their performance or accuracy.',
      "9.2 PeakProfit is not liable for any indirect damages, including lost profits or data.",
      "9.3 PeakProfit reserves the right to modify or discontinue any elements of the Services without notice.",
    ],
  },
  {
    title: "10. Communication",
    content: [
      "All communications will be conducted through your Client Section or the email you provided. PeakProfit's contact email is Support@PeakProfit.com.",
    ],
  },
  {
    title: "11. Violation of the GTC",
    content: [
      "If you violate any provision of the GTC, PeakProfit reserves the right to restrict your access to the Services without notice or compensation.",
    ],
  },
  {
    title: "12. Right to Withdraw",
    content: [
      "12.1 As a consumer, you may withdraw from the contract within 14 days unless you begin demo trading before the end of the 14-day period.",
      "12.2 Withdrawal requests should be sent to Support@PeakProfit.com.",
    ],
  },
  {
    title: "13. Defective Performances",
    content: [
      "If the Services provided do not meet the agreed-upon terms, you may file a complaint by emailing Support@PeakProfit.com.",
    ],
  },
  {
    title: "14. Changes to the GTC",
    content: [
      "PeakProfit reserves the right to change these GTC at any time. Changes will apply to new customers and new orders by existing customers.",
    ],
  },
];

const TermsAndServices = () => {
  return (
    <div className="text-white p-6 md:p-8 lg:pt-20 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 pb-4 border-b border-purple-500">
        Terms & Services
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

export default TermsAndServices;
