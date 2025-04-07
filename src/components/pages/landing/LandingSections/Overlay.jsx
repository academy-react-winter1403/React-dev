import React from "react";

const Overlay = ({ widthNum, heightNum, posYNum, posXNum }) => {
  return (
    <>
      <div
        // className="absolute invisible opacity-0 transition-opacity duration-300 
        // group-hover:visible group-hover:opacity-70 
        // backdrop-blur-[2px] bg-[#003e639e] rounded-2xl 
        // group-hover:bg-gradient-to-b from-[#00FCF6] to-[#002B2A]"
        // style={{
        //   width: `${widthNum}px`,
        //   height: `${heightNum}px`,
        //   top: `${posYNum}px`,
        //   right: `${posXNum}px`,
        // }}

        className={`w-[${widthNum}%] h-[${heightNum}%] absolute invisible opacity-0 transition-opacity duration-300
          group-hover:visible group-hover:opacity-70 backdrop-blur-[2px] bg-[#003e639e] rounded-2xl
          group-hover:bg-gradient-to-b from-[#00FCF6] to-[#002B2A]`}
          style={{
          width: `${widthNum}px`,
          height: `${heightNum}px`,
          top: `${posYNum}px`,
          right: `${posXNum}px`,
        }}
      >
        <div className="w-full h-full hover:bg-gradient-to-b from-[#00FCF6] to-[#002B2A] rounded-2xl"></div>
      </div>
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
