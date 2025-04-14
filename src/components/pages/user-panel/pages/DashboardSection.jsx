import React from "react";

import TopSection from "../dosboard/TopSection";
import CenterSection from "../dosboard/CenterSection";

const DashboardSection = () => {
  return (
    <div className="dashboard-container w-full flex justify-center ">
      <div className="dashboard-control w-[90%] h-96 border p-2">
        <TopSection/>
        <CenterSection/>
      </div>
    </div>
  );
};

export default DashboardSection;
