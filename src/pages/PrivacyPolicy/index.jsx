import React from "react";

const sections = [
  {
    title: "Privacy Policy",
    content: [
      "At PeakProfit, we are committed to safeguarding your privacy. This Privacy Policy applies to PeakProfit.com and outlines how we collect, use, and protect your personal information. By using the PeakProfit website, you agree to the practices described in this policy.",
    ],
  },
  {
    title: "Collection of Personal Information",
    content: [
      "To provide you with the best possible products and services, PeakProfit may collect the following personally identifiable information:",
      "• First and Last Name",
      "• Mailing Address",
      "• Email Address",
      "• Phone Number",
      "• ID or Passport Photo for KYC (Know Your Customer) verification",
      "If you make purchases on PeakProfit, we may collect billing information, including credit card details, to complete transactions. We only collect personal information when you voluntarily provide it, such as when registering for an account, entering a contest, or purchasing products. We use this information to communicate with you regarding your requests and may gather additional personal or non-personal data in the future.",
    ],
  },
  {
    title: "Use of Personal Information",
    content: [
      "PeakProfit uses your personal information to deliver the services you request and may also inform you of other products or services that may be of interest to you. This information helps us enhance the overall user experience.",
    ],
  },
  {
    title: "Sharing Information with Third Parties",
    content: [
      "PeakProfit may share your data with trusted partners for purposes such as statistical analysis, sending email communications, providing customer support, or arranging deliveries. These third parties are required to maintain the confidentiality of your data and can only use it to provide the services we have contracted them for. PeakProfit may also disclose your personal information if required by law, to protect our rights, or under exigent circumstances that affect the safety of our users or the public.",
    ],
  },
  {
    title: "Tracking User Behavior",
    content: [
      "We may track user activity within PeakProfit to identify popular services and deliver personalized content and advertising based on user interests.",
    ],
  },
  {
    title: "Automatically Collected Information",
    content: [
      "Certain information, such as your IP address, browser type, domain names, and referring website addresses, may be automatically collected when you visit PeakProfit. This data is used to operate and improve the service, maintain its quality, and generate general usage statistics.",
    ],
  },
  {
    title: "External Links",
    content: [
      "Our website may contain links to other sites. Please be aware that PeakProfit is not responsible for the privacy practices of those sites. We encourage you to read the privacy policies of other websites that may collect personal information.",
    ],
  },
  {
    title: "Right to Deletion",
    content: [
      "You have the right to request the deletion of your personal information, subject to certain exceptions. Upon receiving a verifiable request, we will delete your personal information from our records and direct service providers to do the same. However, we may not be able to comply with deletion requests if the information is needed to:",
      "• Complete a transaction or fulfill a service request.",
      "• Detect and protect against fraudulent activity.",
      "• Comply with legal obligations.",
      "• Maintain functionality for debugging and repairs.",
      "• Exercise legal rights such as free speech or comply with other legal requirements.",
    ],
  },
  {
    title: "Collection of Information from Minors",
    content: [
      "PeakProfit does not knowingly collect personal information from anyone under the age of 18. You must be 18 years or older to sign up for our services.",
    ],
  },
  {
    title: "Email Communications",
    content: [
      'PeakProfit may send you emails regarding promotions, announcements, surveys, or other general information. If you wish to stop receiving these communications, you may opt out by responding to any of our emails with "Unsubscribe."',
    ],
  },
  {
    title: "External Data Storage",
    content: [
      "Your data may be stored on servers provided by third-party vendors with whom we have contracts to ensure secure data handling.",
    ],
  },
  {
    title: "Changes to This Policy",
    content: [
      "PeakProfit reserves the right to modify this Privacy Policy. Significant changes will be communicated via email or by posting a notice on our website. Your continued use of the website after such updates will signify your acceptance of the revised policy.",
    ],
  },
  {
    title: "Contact Us",
    content: [
      "If you have any questions or concerns regarding this Privacy Policy, please contact us at:",
      "support@fundedtigers.com",
      "Your privacy is important to us, and we are committed to protecting your personal information.",
    ],
  },
];

const PrivacyPolicy = () => {
  return (
    <div className="text-white p-6 md:p-8 lg:pt-20 max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-6xl font-bold text-center mb-8 pb-4 border-b border-purple-500">
        Privacy Policy
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

export default PrivacyPolicy;
