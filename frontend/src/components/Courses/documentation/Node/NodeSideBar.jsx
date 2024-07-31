import React from "react";

function NodeSidebar({ subtopics, selectedSubtopic, onSelectSubtopic, completedSubtopics }) {
  return (
    <div className="w-[300px] p-4 h-full overflow-y-scroll scrollbar-hide">
      <ul className="border border-primary bg-white rounded-md shadow-md divide-y divide-gray-200">
        {subtopics.map((subtopic, index) => (
          <li
            key={index}
            className={`p-3 cursor-pointer transition-colors duration-300 ${
              selectedSubtopic === subtopic
                ? "hover:bg-gray-100 bg-secondary"
                : completedSubtopics.includes(subtopic)
                ? "bg-green-500 text-white"
                : "bg-primary text-white"
            }`}
            onClick={() => {
              console.log(`Subtopic selected: ${subtopic}`);
              onSelectSubtopic(index);
            }}
          >
            {subtopic}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NodeSidebar;
