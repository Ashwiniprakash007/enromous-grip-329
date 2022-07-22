import React from "react";
import { Routes, Route } from "react-router-dom";
import { Flow } from "./Flow page/Flow";
import { Login } from "./Login/Login";
import Signup from "./Signup";
import { Pricing } from "./Signup/Pricing";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/flow" element={<Flow />}></Route>
      <Route path="/pricing" element={<Pricing />}></Route>
      {/* <Route path="*" element={<h1>No Page Found</h1>}></Route>{" "} */}
    </Routes>
  );
};

export default MainRoutes;
