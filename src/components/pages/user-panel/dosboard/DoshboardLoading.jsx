import React from "react";
import StatusCardLoading from "./loading/StatusCardLoading";
import { CircularProgress } from "@heroui/react";

const DoshboardLoading = () => {
  return (
    <div className="dashboard-loding animate-pulse mt-5">
      <div className="top-section flex items-center">
        <div className="right flex gap-x-8">
          <StatusCardLoading />
          <StatusCardLoading />
        </div>
        <div className="left flex items-center gap-x-10">
          <div className="text-control flex flex-col items-center gap-y-1.5 mr-8">
            <div className="w-[130px] h-4 rounded-xl bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-[150px] h-4 rounded-xl bg-gray-200 dark:bg-gray-700"></div>
            <div className="w-[110px] h-4 rounded-xl bg-gray-200 dark:bg-gray-700"></div>
          </div>
          <CircularProgress
            classNames={{
              svg: "w-[80px] h-[80px]  stroke-[1.5px] stroke-[#FFFFFF] drop-shadow-[0_1px_1px_#00000040] transition-[5s]",
              indicator: "stroke-gray-200 dark:stroke-gray-700",
              value: "font-iran-sans text-[17px]",
            }}
            value={100}
          />
        </div>
      </div>
      <div className="center-section w-[93%] h-36 p-8 rounded-xl bg-gray-200 dark:bg-gray-700 mt-14"></div>
      <div className="bottom-section flex w-[93%] justify-between">
        <div className="right mt-14">
          <div className="head-text-loading w-[220px] h-4 rounded-xl bg-gray-200 dark:bg-gray-700"></div>
          <div className="head-text-loading w-[290px] h-14 rounded-xl bg-gray-200 dark:bg-gray-700 mt-2"></div>
          <div className="head-text-loading w-[290px] h-14 rounded-xl bg-gray-200 dark:bg-gray-700 mt-2"></div>
        </div>
        <div className="left mt-14">
          <div className="head-text-loading w-[220px] h-4 rounded-xl bg-gray-200 dark:bg-gray-700 "></div>
          <div className="head-text-loading w-[290px] h-14 rounded-xl bg-gray-200 dark:bg-gray-700 mt-2"></div>
          <div className="head-text-loading w-[290px] h-14 rounded-xl bg-gray-200 dark:bg-gray-700 mt-2"></div>
        </div>
      </div>
    </div>
  );
};

export default DoshboardLoading;
