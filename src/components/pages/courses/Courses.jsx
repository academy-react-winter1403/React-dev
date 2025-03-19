import React from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { useLocation } from "react-router-dom";

const Courses = () => {
  return (
    <div className="courses-holder flex justify-center mt-10">
      <div className="container w-[80%] font-b-yekan flex flex-col items-center">
        <TopSection />
        <BottomSection />
      </div>
    </div>
  );
};

export default Courses;
