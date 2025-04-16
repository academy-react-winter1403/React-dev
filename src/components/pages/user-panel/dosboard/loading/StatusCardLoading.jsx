import React from "react";

const StatusCardLoading = () => {
  return (
    <button className="status-card bg-gray-400 flex px-3.5 py-1.5 rounded-xl">
      <div className="right flex flex-col justify-between">
        <div className="w-[70px] h-6 rounded-[10px] bg-gray-200 dark:bg-gray-700"></div>
        <div className="w-[90px] h-3 rounded-[10px] bg-gray-200 dark:bg-gray-700"></div>
      </div>
      <div className="photo-control">
        <div
          className="photo w-[50px] h-[50px] rounded-[50%] bg-gray-200 dark:bg-gray-700
                relative top-[-26px]"
        ></div>
      </div>
    </button>
  );
};

export default StatusCardLoading;
