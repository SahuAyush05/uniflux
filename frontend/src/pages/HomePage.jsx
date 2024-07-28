import React from "react";
import { FaHome } from "react-icons/fa";
import { FaLaptopHouse } from "react-icons/fa";
import { GrTest } from "react-icons/gr";
import { PiStudentBold } from "react-icons/pi";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { MdLogout } from "react-icons/md";
import { IoIosSettings } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import LogoImg from "../assets/logo.jpg";
import { Link, Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <div className="flex flex-row w-[100%]">
      <div className="h-[100vh] w-[18%] bg-white flex flex-col ">
        <div className="flex flex-col pb-8 p-4">
          <h2 className="text-secondary text-3xl">uniflux</h2>
          <p className="text-secondary text-sm">UPSKILL TECHNOLOGY</p>
        </div>
        <div className="flex flex-col">
          <p className="text-gray-400 px-4 mt-4 mb-2">OVERVIEW</p>
          <ul className="">
            <Link to="/home/Dashboard">
              <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4  text-[0.9em]">
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
                {" "}
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
          <ul className="">
            <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em] ">
              <FaUserAlt className="text-2xl" />
              Profile
            </li>
            <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
              <IoIosSettings className="text-2xl" />
              Settings
            </li>
            <Link to="/">
              <li className="flex flex-row items-center gap-4 my-2 text-secondary hover:bg-[#91DDCF] h-12 px-4 text-[0.9em]">
                {" "}
                <MdLogout className="text-2xl" />
                Logout
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="w-[82%]  h-[100vh]">
        <div className="h-[10%] flex flex-row-reverse p-4">
          <div className="bg-secondary text-xl p-2 my-2  h-10 flex items-center rounded-full font-medium text-[#103133]">
            <div className="flex-shrink-0 w-8 h-8 rounded-full overflow-hidden">
              <img
                src={LogoImg}
                alt="logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-m ml-2 text-white">Sahu</p>
          </div>
        </div>
        <div className="h-[90%]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
