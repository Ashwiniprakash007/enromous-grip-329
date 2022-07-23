import React from "react";
import { Route, Routes } from "react-router-dom";
import { Flow } from "./components/Flow page/Flow";
import HomePage from "./components/HomePage";
import { Login } from "./components/Login/Login";
import Signup from "./components/Signup";
import { Pricing } from "./components/Signup/Pricing";
import Courses from "./Pages/Courses";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/courses/:id" element={<Courses />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/flow" element={<Flow />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>

      {/* <Route path="*" element={<h1>No Page Found</h1>}></Route>{" "} */}
    </Routes>
  );
};

export default MainRoutes;
