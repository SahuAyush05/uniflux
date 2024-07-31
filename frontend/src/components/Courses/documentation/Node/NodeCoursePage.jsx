import React, { useState, useEffect } from "react";
import NodeSidebar from "./NodeSideBar";
import NodeArticleCard from "./NodeArticleCard";
import { useNavigate } from "react-router-dom";
import { db, auth } from "../../../../firebase";
import { doc, getDoc, setDoc } from "firebase/firestore";

function NodeCoursePage() {
  const navigate = useNavigate();
  const [selectedSubtopicIndex, setSelectedSubtopicIndex] = useState(0);
  const [completedSubtopics, setCompletedSubtopics] = useState([]);

  const subtopics = [
    "What is NodeJS and How to install NodeJS",
    "Global Variables and Modules in NodeJS",
    "Types Of Modules in Node and OS, FS , PATH Modules",
    "Event-Driven Programming",
    "Components Of Request-Response",
    "What are HTTP Methods and Status codes",
    "Let's Create a Server and Serve Something Interesting"
  ];

  const user = auth.currentUser;

  useEffect(() => {
    const fetchProgress = async () => {
      if (user) {
        const docRef = doc(db, "NodeJS", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setCompletedSubtopics(data.progress || []);
          // Set the selected subtopic index based on progress
          const progressIndex = data.progress.length;
          setSelectedSubtopicIndex(progressIndex);
        } else {
          await setDoc(docRef, { progress: [] });
        }
      }
    };

    fetchProgress();
  }, [user]);

  const updateProgress = async (newIndex) => {
    if (user) {
      const docRef = doc(db, "NodeJS", user.uid);

      // Get the current progress
      const docSnap = await getDoc(docRef);
      let progress = [];

      if (docSnap.exists()) {
        progress = docSnap.data().progress || [];
      }

      // Check if the new subtopic is already completed
      const newSubtopic = subtopics[newIndex];
      if (!progress.includes(newSubtopic)) {
        progress.push(newSubtopic);

        // Update Firestore
        await setDoc(docRef, { progress: progress }, { merge: true });
        setCompletedSubtopics(progress);
        console.log(completedSubtopics);
      }
    }
  };

  const handleNext = () => {
    setSelectedSubtopicIndex((prevIndex) => {
      const newIndex = prevIndex < subtopics.length - 1 ? prevIndex + 1 : prevIndex;
      updateProgress(prevIndex);
      return newIndex;
    });
  };

  const handleBack = () => {
    setSelectedSubtopicIndex((prevIndex) => {
      const newIndex = prevIndex > 0 ? prevIndex - 1 : prevIndex;
      return newIndex;
    });
  };

  const handleTest = () =>{
    setSelectedSubtopicIndex((prevIndex) => {
      updateProgress(prevIndex);
      navigate('/home/Courses/Assessment/NodeJS')
    });
  }


  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <NodeSidebar
        subtopics={subtopics}
        selectedSubtopic={subtopics[selectedSubtopicIndex]}
        onSelectSubtopic={(index) => setSelectedSubtopicIndex(index)}
        completedSubtopics={completedSubtopics}
        
      />

      {/* Main content */}
      <div className="flex-grow w-5/6 px-8 py-4">
        <NodeArticleCard
          subtopic={subtopics[selectedSubtopicIndex]}
          onNext={handleNext}
          onBack={handleBack}
          onTest={handleTest}
        />
      </div>
    </div>
  );
}

export default NodeCoursePage;
