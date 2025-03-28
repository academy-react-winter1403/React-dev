import React from "react";

const Overlay = ({ widthNum, heightNum, posYNum, posXNum }) => {
  return (
    <>
      <div
        className={`group-hover:visible group-hover:opacity-100 backdrop-blur-[2px] invisible
            opacity-0 transition-[1s] w-[${widthNum}] h-[${heightNum}]
            absolute top-[${posYNum}] right-[${posXNum}] bg-[#003e639e] rounded-2xl`}
      ></div>
      <button
        className="absolute py-[8px] px-[12px] rounded-[20px]
         bg-[#E48900] text-[#6C3A00] font-b-yekan text-[18px] cursor-pointer
            group-hover:visible group-hover:opacity-100 invisible opacity-0 transition-[1s]"
      >
        {" "}
        مطالعه مطالب{" "}
      </button>
    </>
  );
};

export default Overlay;
