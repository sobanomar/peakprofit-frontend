import React, { forwardRef } from "react";
import EvaluationTable from "../../components/EvaluationTable";
import ButtonGroup from "../../components/ButtonGroup";
import EvaluationSidebar from "../../components/EvaluationSidebar";

const Evaluation = forwardRef((props, ref) => {
  const [currentStep, setCurrentStep] = React.useState(3);
  const [selectedAccountSize, setSelectedAccountSize] = React.useState(5);
  const [selectedTrader, setSelectedTrader] = React.useState(1);

  const priceMap = {
    1: {
      // Step-1
      1: ["$56.00", "$22.40"],
      2: ["$109.00", "$43.60"],
      3: ["$235.00", "$94.00"],
      4: ["$359.00", "$143.60"],
      5: ["$590.00", "$236.00"],
      6: ["$1119.00", "$447.60"],
      7: ["$1678.50", "$671.40"],
      8: ["$2797.50", "$1119.00"],
    },
    2: {
      // Step-2
      1: ["$52.00", "$20.80"],
      2: ["$99.00", "$39.60"],
      3: ["$216.00", "$86.40"],
      4: ["$324.00", "$129.60"],
      5: ["$556.00", "$222.40"],
      6: ["$1019.00", "$407.60"],
      7: ["$1528.50", "$611.40"],
      8: ["$2547.50", "$1019.00"],
    },
    3: {
      // Step-3
      1: ["$39.00", "$15.60"],
      2: ["$75.00", "$30.00"],
      3: ["$162.00", "$64.80"],
      4: ["$243.00", "$97.20"],
      5: ["$444.00", "$177.60"],
      6: ["$824.00", "$329.60"],
      7: ["$1236.00", "$494.40"],
      8: ["$2060.00", "$824.00"],
    },
  };

  const [originalFee, discountedFee] =
    priceMap[currentStep][selectedAccountSize];

  const evaluationTypes = [
    {
      value: 1,
      label: "Step-1 Evaluation",
      badgeText: "Popular",
      badgeColor: "green",
    },
    {
      value: 2,
      label: "Step-2 Evaluation",
      badgeText: "Best Value",
      badgeColor: "orange",
    },
    {
      value: 3,
      label: "Step-3 Evaluation",
      badgeText: "Pro Trader",
      badgeColor: "yellow",
    },
  ];

  const accountSize = [
    { value: 1, label: "$5k" },
    { value: 2, label: "$10K" },
    { value: 3, label: "$25k" },
    { value: 4, label: "$50k" },
    { value: 5, label: "$100K", badgeText: "🔥", badgeColor: "yellow" },
    { value: 6, label: "$200k" },
    { value: 7, label: "$300k" },
    { value: 8, label: "$500k" },
  ];

  const traders = [
    {
      value: 1,
      label: "METATRADER 5",
      img: "https://getcryptofunded.com/wp-content/uploads/2025/02/Untitled-design-8.png",
      badgeText: "Coming Soon",
      badgeColor: "orange",
    },
    {
      value: 2,
      label: "TRADE LOCKER",
      img: "https://tradelocker.com/wp-content/uploads/2023/04/cropped-Icon-3-192x192.png",
      // badgeText: "Coming Soon",
      // badgeColor: "orange",
    },
  ];

  return (
    <div ref={ref}>
      <div className="w-full px-4 md:w-[80%] md:mx-auto py-6 md:py-12">
        <h1 className="text-3xl md:text-6xl text-center text-white py-4 md:py-8 font-semibold">
          Configure Your Evaluation
        </h1>
        <div className="p-2 md:p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6">
          <div className="lg:col-span-2 space-y-4 md:space-y-6 w-full">
            <ButtonGroup
              buttons={evaluationTypes}
              selectedValue={currentStep}
              onButtonClick={setCurrentStep}
            />

            <ButtonGroup
              buttons={accountSize}
              selectedValue={selectedAccountSize}
              onButtonClick={setSelectedAccountSize}
            />

            <ButtonGroup
              buttons={traders}
              selectedValue={selectedTrader}
              onButtonClick={setSelectedTrader}
            />

            <div className="overflow-x-auto">
              <EvaluationTable step={currentStep} />
            </div>
          </div>
          <div className="w-full">
            <EvaluationSidebar
              selectedAccountSize={
                accountSize.find((size) => size.value === selectedAccountSize)
                  ?.label || "$10K"
              }
              originalFee={originalFee}
              discountedFee={discountedFee}
            />
          </div>
        </div>
      </div>
    </div>
  );
});

export default Evaluation;
