import React from "react";

const StageName = ({ stageName }) => {
  return (
    <>
      <h1 className='py-2.5 font-bold md:text-[25px] xs:text-[20px] font-b-yekan text-[var(--login-text)]'>
        {stageName}
      </h1>
    </>
  );
};

export default StageName;
