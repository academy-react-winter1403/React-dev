import React from "react";

const HrComp = ({ initialWidth, mtNum }) => {
  return (
    <>
      <hr className={`outline-0 border-0 w-${initialWidth} h-[1px] bg-[#EDEDED] mt-[${mtNum}px]`} />
    </>
  );
};

export default HrComp;
