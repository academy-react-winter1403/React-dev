import React from "react";

const LoadingCardArticles = ({ view }) => {
  return view ? (
    // Grid view loading
    <div className="w-[291px] h-[381px] bg-white p-4 rounded-t-[145px] rounded-b-xs shadow-sm animate-pulse flex flex-col gap-4">
      <div className="w-[251px] h-[171px] rounded-[18px] bg-gray-300" />
      <div className="flex flex-col gap-2 w-full">
        <div className="h-4 w-1/2 bg-gray-300 rounded" />
        <div className="h-4 w-1/3 bg-gray-300 rounded" />
      </div>
    </div>
  ) : (
    // List view loading
    <div className="w-full h-[120px] bg-white p-4 rounded-md shadow-sm animate-pulse flex items-center gap-4">
      <div className="w-[100px] h-full bg-gray-300 rounded-md" />
      <div className="flex flex-col gap-2 w-full">
        <div className="h-4 w-1/2 bg-gray-300 rounded" />
        <div className="h-4 w-1/3 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default LoadingCardArticles;
