import React from "react";

const TextComp = ({ dataMaper, boxContainerStyle, boxControlStyle }) => {
  return (
    <div
      className={`tab-text-container flex justify-center items-center
        border-b-2 border-[#007875] pb-2 ${boxContainerStyle}`
    }
    >
      <div className={`tab-text-control flex items-center justify-between ${boxControlStyle}`}>
        {dataMaper.map((item, index) => {
          return (
            <p key={index} className="text-[#003B39] font-b-yekan text-[15px]">
              {item}
              {item === "قیمت" && <span className="">{" (تومان)"}</span>}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TextComp;
