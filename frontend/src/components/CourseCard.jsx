import React from "react";
import ReactLogo from "../assets/ReactLogo.png";
import DevOpsLogo from "../assets/DevopsLogo.png";
import NodeLogo from "../assets/NodeJSLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { db, auth } from "../firebase";
import { doc, setDoc, getDoc } from "firebase/firestore";

const courses = [
  {
    courseName: "ReactJS",
    Img: ReactLogo,
    courseDescription: ["Complete React JS Tutorial", "Beginner to Advanced"],
    documentation: {
      link: "/home/Courses/documentation/ReactJS",
    },
    assessment: {
      link: "/home/Courses/Assessment/ReactJS",
    },
  },
  {
    courseName: "DevOps",
    Img: DevOpsLogo,
    courseDescription: ["DevOps for Beginners", "Includes AWS & Docker"],
    documentation: {
      link: "/home/Courses/documentation/DevOps",
    },
    assessment: {
      link: "/home/Courses/documentation/DevOps",
    },
  },
  {
    courseName: "NodeJS",
    Img: NodeLogo,
    courseDescription: [
      "Node JS for Backend Developers",
      "Beginner to Advanced",
    ],
    documentation: {
      link: "/home/Courses/documentation/NodeJS",
    },
    assessment: {
      link: "/home/Courses/documentation/NodeJS",
    },
  },
];

const CourseCard = () => {
  const navigate = useNavigate();

  const handleJoinJourney = async (courseLink, courseName) => {
    const user = auth.currentUser;

    if (user) {
      const docRef = doc(db, courseName, user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        await setDoc(docRef, { uid:user.uid,
          progress: [] });
      }

      navigate(courseLink);
    } else {
      // Handle case where user is not authenticated
      console.log("User is not authenticated");
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 with-sidebar:grid-cols-4 gap-4 w-full overflow-y-scroll h-full scrollbar-hide justify-center">
      {courses.map((course, index) => (
        <div
          key={index}
          className="bg-secondary w-[320px] h-[410px] flex flex-col p-6 rounded-lg shadow-lg items-center justify-self-center justify-center mb-6"
        >
          <div className="mb-4 w-full bg-black flex items-center justify-center">
            <img
              src={course.Img}
              alt={`${course.courseName} Logo`}
              className="w-[210px] h-[210px] object-contain"
            />
          </div>
          <h2 className="text-white text-lg font-semibold mb-2">
            {course.courseName}
          </h2>
          <p className="text-white text-center">
            {course.courseDescription[0]}
          </p>
          <p className="text-white text-center mb-4">
            {course.courseDescription[1]}
          </p>
          <div className="flex gap-2 justify-between w-full">
            <div
              className="bg-white text-secondary w-[100%] font-medium text-[0.7em] py-2 px-4 rounded-md shadow-md transition duration-300 hover:bg-gray-200 text-center cursor-pointer"
              onClick={() => handleJoinJourney(course.documentation.link, course.courseName)}
            >
              Join the Journey
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CourseCard;
