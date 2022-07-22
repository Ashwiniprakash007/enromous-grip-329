import React from "react";
import { Routes, Route } from "react-router-dom";
import Courses from "./Courses";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/courses" element={<Courses />}></Route>
      <Route path="/courses/:id" element={<Courses />}></Route>
      {/* <Route path="*" element={<h1>No Page Found</h1>}></Route>{" "} */}
    </Routes>
  );
};

export default MainRoutes;
