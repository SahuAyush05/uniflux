import React,{useState} from 'react'
import Sidebar from './Sidebar';
import { useLocation } from "react-router-dom";
import ProbCard from './ProbCard';
const ProbPage = () => {
    const [selectedSubtopicIndex, setSelectedSubtopicIndex] = useState(0);
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const prob = params.get('problem');
    console.log(prob);
    // Sample subtopics (you can replace with your actual data)
    const subtopics = [
      "Problem Statement",
      "Solve Here",
      "Get Suggestions form the Expert",
    ];
    // const handleNext = () => {
    //   setSelectedSubtopicIndex((prevIndex) => {
    //     const newIndex = prevIndex < subtopics.length - 1 ? prevIndex + 1 : prevIndex;
    //     return newIndex;
    //   });
    // };
    
    // const handleBack = () => {
    //   setSelectedSubtopicIndex((prevIndex) => {
    //     const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex;
    //     return newIndex;
    //   });
    // };

  return (
    <div className="flex h-full ">
      {/* Sidebar */}
      <Sidebar
        subtopics={subtopics}
        selectedSubtopic={subtopics[selectedSubtopicIndex]}
        onSelectSubtopic={(index) => {
          setSelectedSubtopicIndex(index);
        }}
      />

      {/* Main content */}
      <div className="flex-grow w-5/6 px-8 py-4">
        <ProbCard
          subtopic={subtopics[selectedSubtopicIndex]}
          probTitle={prob}
        />
      </div>
    </div>
  )
}

export default ProbPage;
