import React from "react";

const EvaluationTable = ({ step }) => {
  // Define the data for each step
  const tableData = {
    1: {
      headers: ["Rules", "1-Step Evaluation", "Funded Trader"],
      rows: [
        ["Profit Target ", "10%", "N/A"],
        ["Drawdown Type ", "Smart Drawdown", "Smart Drawdown"],
        ["Daily Drawdown ", "4%", "4%"],
        ["Total Drawdown ", "6%", "6%"],
        ["Max Trading Days ", "No time limit", "No time limit"],
        [
          "Min Trading Days",
          "5 days - 0 days with add-on",
          "5 days - 0 days with add-on",
        ],
        ["Challenge Leverage ", "Up to 1:50", "Up to 1:30"],
        ["Weekend Holding ", "✅ Yes", "✅ Yes"],
        ["Reward Schedule ", "N/A", "Bi-Weekly"],
        // ["Profit Split ", "N/A", "80%"],
      ],
    },
    2: {
      headers: ["Rules", "Phase 1", "Phase 2", "Funded Trader"],
      rows: [
        ["Profit Target ", "7%", "5%", "N/A"],
        ["Drawdown Type", "Balance Based", "Balance Based", "Balance Based"],
        ["Daily Drawdown", "5%", "5%", "5%"],
        ["Total Drawdown", "10%", "10%", "10%"],
        ["Max Trading Days", "No time limit", "No time limit", "No time limit"],
        ["Min Trading Days", "5 days", "5 days", "5 days"],
        ["Challenge Leverage", "Up to 1:100", "Up to 1:100", "Up to 1:100"],
        ["Weekend Holding", "✅ Yes", "✅ Yes", "✅ Yes"],
        ["Reward Schedule", "N/A", "N/A", "Bi-Weekly"],
        // ["Profit Split", "N/A", "N/A", "80%"],
      ],
    },
    3: {
      headers: ["Rules", "Phase 1", "Phase 2", "Phase 3", "Funded Trader"],
      rows: [
        ["Profit Target", "6%", "6%", "6%", "N/A"],
        [
          "Drawdown Type",
          "Balance Based",
          "Balance Based",
          "Balance Based",
          "Balance Based",
        ],
        ["Daily Drawdown", "5%", "5%", "5%", "5%"],
        ["Total Drawdown", "10%", "10%", "10%", "10%"],
        [
          "Max Trading Days",
          "No time limit",
          "No time limit",
          "No time limit",
          "No time limit",
        ],
        ["Min Trading Days", "5 days", "5 days", "5 days", "5 days"],
        [
          "Challenge Leverage",
          "Up to 1:100",
          "Up to 1:100",
          "Up to 1:100",
          "Up to 1:100",
        ],
        ["Weekend Holding", "✅ Yes", "✅ Yes", "✅ Yes", "✅ Yes"],
        ["Reward Schedule", "N/A", "N/A", "N/A", "Bi-Weekly"],
        // ["Profit Split", "N/A", "N/A", "N/A", "80%"],
      ],
    },
  };

  // Get the data for the current step
  const currentData = tableData[step] || tableData[1];

  return (
    <div className="hide-scrollbar overflow-x-auto max-w-full rounded-xl border border-[#472C64]">
      <table className="min-w-[600px] w-full text-sm text-left text-gray-300 whitespace-nowrap">
        <thead>
          <tr
            className="text-xs uppercase"
            style={{
              background: "linear-gradient(to right, #AE30FF, #7A2EFF)",
            }}
          >
            {currentData.headers.map((header, index) => (
              <th
                key={index}
                className="px-4 md:px-6 py-3 text-white text-sm md:text-lg"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentData.rows.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={`${
                rowIndex % 2 === 0 ? "bg-[#2C193E]" : "bg-[#472C64]"
              } border-b border-gray-700`}
            >
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-4 md:px-6 py-4 text-sm md:text-base"
                >
                  {cellIndex === 0 ? (
                    <span className="font-medium text-white">{cell}</span>
                  ) : (
                    cell
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EvaluationTable;
