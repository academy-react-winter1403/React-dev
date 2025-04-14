import React from "react";

const StatusCard = ({ children, title, description, textColor, titleChildren }) => {
  return (
    <button className="status-card-control font-b-yekan bg-[#F9F9F9] rounded-[5px]
      drop-shadow-[0_1px_2px_#00000040] px-3.5 py-1.5"
    >
      <div className="top flex items-center gap-x-6">
        <h2>
          {/* <span className={`text-[${textColor}] text-[25px] font-extrabold`}>{title}</span> */}
          {titleChildren}
        </h2>
        {/* <div className="icon-control relative top-[-23px]"> */}
          {children}
        {/* </div> */}
      </div>
      <p className="bottom text-start text-[#A7A7A7] mt-[-3px]">{description}</p>
    </button>
  );
};

export default StatusCard;
