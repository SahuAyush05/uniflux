import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import UserPreference from "./pages/UserPreference";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/overview/Dashboard";
import MiniCourses from "./pages/overview/MiniCourses";
import Ask from "./pages/overview/Ask";
import Hired from "./pages/overview/Hired";
import Labs from "./pages/overview/Labs";
import ReactDocs from "./components/Courses/documentation/ReactDocs";
import ReactAsses from "./components/Courses/assessment/ReactAsses"
import VirtualCode from "./components/labs/VirtualCode";
import CoursePage from "./components/Courses/documentation/React/CoursePage";
import NodeCoursePage from "./components/Courses/documentation/Node/NodeCoursePage";
import DevCoursePage from "./components/Courses/documentation/Devops/DevCoursePage";
import NodeAsses from "./components/Courses/assessment/NodeAsses";
import DevopsAsses from "./components/Courses/assessment/DevopsAsses";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />}>
          <Route path="/home/dashboard" element={<Dashboard />} />
          <Route path="/home/Courses" element={<MiniCourses />}></Route>
          <Route
            path="/home/Courses/documentation/ReactJS"
            element={<CoursePage />}
          />
          <Route
            path="/home/Courses/Assessment/ReactJS"
            element={<ReactAsses />}
          />
          <Route path="/home/Courses/documentation/NodeJS" element={<NodeCoursePage />}/>
          <Route
            path="/home/Courses/Assessment/NodeJS"
            element={<NodeAsses />}
          />
          <Route path="/home/Courses/documentation/DevOps" element={<DevCoursePage />}/>
          <Route
            path="/home/Courses/Assessment/Devops"
            element={<DevopsAsses />}
          />
          <Route path="/home/Ask" element={<Ask />} />
          <Route path="/home/Hired" element={<Hired />} />
          <Route path="/home/Labs" element={<Labs />} />
          <Route path="/home/Labs/VirtualCode" element={<VirtualCode />} />
        </Route>
        <Route path="/login/detail" element={<UserPreference />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
