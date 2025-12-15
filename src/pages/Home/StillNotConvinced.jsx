import React from "react";

const StillNotConvinced = () => {
  const data = [
    {
      firm: "PeakProfit",
      accountSize: "100K",
      price: "$333",
      drawdown: "5% Daily | 10% Total",
      // payoutSplit: "Up to 95%",
      minDays: "5",
      targets: "7% Phase 1 | 5% Phase 2",
      pairs: "235+ Pairs",
      tradelocker: "Yes",
      // payoutFreq: "14 Days",
      highlight: true,
    },
    {
      firm: "CFT",
      accountSize: "100K",
      price: "$598",
      drawdown: "5% Daily | 10% Total",
      // payoutSplit: "80%",
      minDays: "5",
      targets: "8% Phase 1 | 5% Phase 2",
      pairs: "250+ Pairs",
      tradelocker: "Yes",
      // payoutFreq: "30 Days",
    },
    {
      firm: "Breakout Prop",
      accountSize: "100K",
      price: "$800",
      drawdown: "5% Daily | 8% Total",
      // payoutSplit: "80%",
      minDays: "0",
      targets: "10% Phase 1 | 5% Phase 2",
      pairs: "160+ Pairs",
      tradelocker: "No",
      // payoutFreq: "14 Days",
    },
    {
      firm: "Hyro Trader",
      accountSize: "100K",
      price: "$799",
      drawdown: "5% Daily | 10% Total",
      // payoutSplit: "70%",
      minDays: "10",
      targets: "10% Phase 1 | 5% Phase 2",
      pairs: "500+ Pairs",
      tradelocker: "No",
      // payoutFreq: "30 Days",
    },
  ];

  const rowHeaders = Object.keys(data[0]).filter(
    (key) => key !== "firm" && key !== "highlight"
  );

  return (
    <div className="flex pb-12 items-center justify-center flex-col text-white px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-10 mt-20 font-semibold text-center">
        Still Not Convinced?
      </h1>
      <div className="overflow-x-auto w-full max-w-7xl hide-scrollbar">
        <table className="border-collapse w-full min-w-[600px] text-sm sm:text-base">
          <thead>
            <tr>
              <th className="p-4 text-left bg-transparent whitespace-nowrap">
                Prop Firms
              </th>
              {data.map((item, index) => (
                <th
                  key={index}
                  className={`p-4 text-center whitespace-nowrap ${
                    item.highlight
                      ? "bg-[#0B111D] border-l-2 border-r-2 border-t-2 border-[#8000FF]"
                      : "bg-transparent"
                  } ${index === data.length - 1 ? "rounded-tr-lg" : ""}`}
                >
                  {item.firm}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rowHeaders.map((header, rowIndex) => (
              <tr key={rowIndex}>
                <td
                  className={`p-4 text-left bg-[#181D28] whitespace-nowrap ${
                    rowIndex === rowHeaders.length - 1 ? "rounded-bl-lg" : ""
                  }`}
                >
                  {header
                    .replace(/([A-Z])/g, " $1")
                    .replace(/^./, (str) => str.toUpperCase())}
                </td>
                {data.map((item, colIndex) => {
                  const isHighlighted = item.highlight;
                  const isFirstRow = rowIndex === 0;
                  const isLastRow = rowIndex === rowHeaders.length - 1;
                  const isLastColumn = colIndex === data.length - 1;

                  let borderClasses = "";
                  if (isHighlighted) {
                    if (isFirstRow) {
                      borderClasses = "border-l-2 border-r-2 border-[#8000FF]";
                    } else if (isLastRow) {
                      borderClasses =
                        "border-l-2 border-r-2 border-b-2 border-[#8000FF]";
                    } else {
                      borderClasses = "border-l-2 border-r-2 border-[#8000FF]";
                    }
                  }

                  return (
                    <td
                      key={colIndex}
                      className={`p-4 text-center whitespace-nowrap ${
                        isHighlighted ? "bg-[#0B111D]" : "bg-[#181D28]"
                      } ${borderClasses} ${
                        isLastRow && isLastColumn ? "rounded-br-lg" : ""
                      }`}
                    >
                      {item[header]}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StillNotConvinced;
