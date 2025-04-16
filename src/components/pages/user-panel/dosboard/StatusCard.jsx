import React from "react";

const StatusCard = ({
  children,
  title,
  description,
  textColor,
  titleChildren,
}) => {
  return (
    <button
      className="status-card-control font-b-yekan bg-[#F9F9F9] rounded-[5px]
      drop-shadow-[0_1px_2px_#00000040] flex max-xl:flex-col-reverse max-xl:items-center px-2.5 py-1.5"
    >
      <div className="text-control">
        <h2 className="text-nowrap">
          {/* <span className={`text-[${textColor}] text-[25px] font-extrabold`}>{title}</span> */}
          {titleChildren}
        </h2>
        <p className="bottom text-start text-[#A7A7A7] mt-[-3px] text-[13px] text-nowrap">
          {description}
        </p>
      </div>
      <div className="top flex items-start min-xl:gap-x-6">
        {/* <div className="icon-control relative top-[-23px]"> */}
        {children}
        {/* </div> */}
      </div>
    </button>
  );
};

export default StatusCard;
