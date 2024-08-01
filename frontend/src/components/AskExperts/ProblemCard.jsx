import React from "react";

const ProblemCard = ({
  companyName,
  problemTitle,
  expertName,
  onSolveClick,
}) => {
  return (
    <div className="max-w-sm rounded bg-gray-200 shadow-lg h-[280px] p-4 m-4">
      <div className="font-bold text-xl mb-2 h-[15%]">Expert: {expertName}</div>
      <p className="text-gray-700 text-base h-[45%] overflow-scroll scrollbar-hide">{problemTitle}</p>
      <p className="text-gray-500 text-sm pt-2 h-[10%]">{companyName}</p>
      <div className="h-[15%]">
        <button
          className="mt-4 bg-secondary hover:bg-primary  text-white font-bold py-2 px-4 rounded"
          onClick={onSolveClick}
        >
          Try to Solve
        </button>
      </div>
    </div>
  );
};

export default ProblemCard;
