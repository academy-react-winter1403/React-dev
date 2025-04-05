import React from "react";

const CompletionCourse = ({ completionNum }) => {
  return (
    <div className="completion-course-card w-full">
      <div className="top-section w-full flex justify-between">
        <p className="text-[#00504E]"> درصد تکمیل دوره </p>
        <p>{`${completionNum}%`}</p>
      </div>
      <div className="bottom-section w-full mt-[17px]">
        <div className="thumb w-full h-2.5 rounded-[10px] overflow-hidden bg-[#F0F0F0] flex justify-end">
          <div className="track w-[80%] h-full bg-[#01CEC9]"></div>
        </div>
      </div>
    </div>
  );
};

export default CompletionCourse;
