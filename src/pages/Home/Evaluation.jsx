import React from "react";
import EvaluationTable from "../../components/EvaluationTable";
import ButtonGroup from "../../components/ButtonGroup";
import EvaluationSidebar from "../../components/EvaluationSidebar";

const Evaluation = () => {
  const [currentStep, setCurrentStep] = React.useState(3);
  const [selectedAccountSize, setSelectedAccountSize] = React.useState(5);
  const [selectedTrader, setSelectedTrader] = React.useState(1);

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
  ];

  const traders = [
    {
      value: 1,
      label: "METATRADER 5",
      img: "https://getcryptofunded.com/wp-content/uploads/2025/02/Untitled-design-8.png",
    },
    {
      value: 2,
      label: "CTRADER",
      img: "https://getcryptofunded.com/wp-content/uploads/2025/02/Untitled-design-8.png",
      badgeText: "Coming Soon",
      badgeColor: "orange",
    },
    {
      value: 3,
      label: "MATCHTRADER",
      img: "https://getcryptofunded.com/wp-content/uploads/2025/02/Untitled-design-8.png",
      badgeText: "Coming Soon",
      badgeColor: "orange",
    },
  ];

  return (
    <div className="w-[80%] mx-auto py-12">
      <h1 className="text-6xl text-center text-white py-8 font-semibold">
        Configure Your Evaluation
      </h1>
      <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-6  place-items-center">
        <div className="lg:col-span-2 space-y-6">
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

          <EvaluationTable step={currentStep} />
        </div>
        <EvaluationSidebar
          selectedAccountSize={
            accountSize.find((size) => size.value === selectedAccountSize)
              ?.label || "$10,000"
          }
          discountedFee="$39.60"
          originalFee="$99.00"
        />
      </div>
    </div>
  );
};

export default Evaluation;
