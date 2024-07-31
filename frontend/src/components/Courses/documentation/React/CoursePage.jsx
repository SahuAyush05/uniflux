import React, { useState } from "react";
import Sidebar from "./SideBar";
import ArticleCard from "./ArticleCard";

function CoursePage() {
  const [selectedSubtopicIndex, setSelectedSubtopicIndex] = useState(0);

  // Sample subtopics (you can replace with your actual data)
  const subtopics = [
    "What React is and why it's so popular",
    "How to install React",
    "React Components",
    "React State",
    "React Props",
    "Handling user events in React",
    "Lifecycle events in a React component"
  ];

  const handleNext = () => {
    setSelectedSubtopicIndex((prevIndex) =>
      prevIndex < subtopics.length - 1 ? prevIndex + 1 : prevIndex
    );
  };

  const handleBack = () => {
    setSelectedSubtopicIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : prevIndex
    );
  };

  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <Sidebar
        subtopics={subtopics}
        selectedSubtopic={subtopics[selectedSubtopicIndex]}
        onSelectSubtopic={(index) => setSelectedSubtopicIndex(index)}
        
      />

      {/* Main content */}
      <div className="flex-grow w-5/6 px-8 py-4">
        <ArticleCard
          subtopic={subtopics[selectedSubtopicIndex]}
          onNext={handleNext}
          onBack={handleBack}
        />
      </div>
    </div>
  );
}

export default CoursePage;
