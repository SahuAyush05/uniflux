import React, { useState, useEffect } from "react";
import { FaHome, FaLaptopHouse, FaUserAlt } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { Link, Outlet } from "react-router-dom";
import { auth, db } from "../firebase";
import { collection, query, where, getDocs } from "firebase/firestore";
import { GiHamburgerMenu } from "react-icons/gi";
import { RiCloseCircleLine } from "react-icons/ri";

const HomePage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const uid = user.uid;
          const q = query(
            collection(db, "userDetail"),
            where("uid", "==", uid)
          );
          const querySnapshot = await getDocs(q);
          const userData = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
          setData(userData);
          console.log(userData);
        }
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        fetchUserData();
      } else {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="w-full h-full">
      {/* Header */}
      <div className="h-[10vh] flex justify-between p-4 shadow">
        <div className="flex items-center">
          <button onClick={toggleSidebar} className=" mr-4">
            <GiHamburgerMenu className="text-white text-[1.4em]" />
          </button>
          <h2 className="text-white text-[2.2em]">uniflux</h2>
        </div>
        <div className="bg-secondary text-xl p-2 my-2 h-10 flex items-center rounded-full font-medium text-[#103133]">
          <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
            <img
              src={data[0]?.photo || "default-avatar.png"}
              alt="profile"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="text-m ml-2 text-white">{data[0]?.name || "User"}</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex">
        {/* Sidebar */}
        <div
          className={`fixed top-0 left-0 h-full bg-white z-50 shadow-lg transform transition-transform duration-300 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          style={{ width: "18%" }}
        >
          <div className="flex flex-col pb-8 p-4">
            <span className="flex flex-row justify-between items-center">
              <h2 className="text-secondary text-3xl">uniflux</h2>
              <button
                onClick={toggleSidebar}
                className="text-secondary text-3xl font-extrabold p-2 mb-4"
              >
                <RiCloseCircleLine  />
              </button>
            </span>
            <p className="text-secondary text-sm">UPSKILL TECHNOLOGY</p>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-400 px-4 mt-4 mb-2">OVERVIEW</p>
            <ul>
              <Link to="/home/Dashboard">
                <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
                  <FaHome className="text-2xl" />
                  Dashboard
                </li>
              </Link>
              <Link to="/home/Courses">
                <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
                  <PiStudentBold className="text-2xl" />
                  Mini Courses
                </li>
              </Link>
              <Link to="/home/Labs">
                <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
                  <GrTest className="text-2xl" />
                  Interactive Labs
                </li>
              </Link>
              <Link to="/home/Hired">
                <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
                  <BsFillSuitcaseLgFill className="text-2xl" />
                  Built and Get Hired
                </li>
              </Link>
              <Link to="/home/Ask">
                <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
                  <FaLaptopHouse className="text-2xl" />
                  Ask Industry Experts
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col">
            <p className="text-gray-400 px-4 mt-4 mb-2">ACCOUNT</p>
            <ul>
              <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
                <FaUserAlt className="text-2xl" />
                Profile
              </li>
              <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
                <IoIosSettings className="text-2xl" />
                Settings
              </li>
              <Link to="/">
                <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
                  <MdLogout className="text-2xl" />
                  Logout
                </li>
              </Link>
            </ul>
          </div>
        </div>

        {/* Main Content Area */}
        <div
          className={`flex-1 h-[90vh] py-2 px-8 transition-all duration-300 ${
            isSidebarOpen ? "ml-[18%]" : "ml-0"
          }`}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
