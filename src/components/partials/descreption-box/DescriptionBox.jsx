import Aos from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DescriptionBox = ({ initialHeight, children, aosAnim }) => {
  const [heightFlag, setHeightFlag] = useState(false);

  const changeHeightHandler = () => {
    heightFlag ? setHeightFlag(false) : setHeightFlag(true);
  };


  useEffect(() => {
    Aos.init({
      duration: 800,
    });
  }, []);

  

  return (
    
    <div
      className={`description-box-container w-full  ${
        !heightFlag
          ? `h-[${initialHeight}px] transition-[1s]`
          : `h-auto pb-[80px] transition-[1s]`
      } relative rounded-2xl p-7 overflow-hidden`}
      data-aos="fade-left"
    >
      <div
        className={`gradient w-full h-full absolute top-0 left-0 bg-linear-to-b
            from-[#FFFFFF00] to-[#FFFFFF] transition-all
            ${heightFlag ? `invisible opacity-0` : `visible opacity-100`}`}
      ></div>
      {children}
      <div
        className={`btn-control w-full absolute ${
          heightFlag ? `mt-[20px]` : `bottom-[10px]`
        }
        left-0 flex justify-center`}
      >
        <button
          className="group bg-transparent border border-[#01CEC9] rounded-[45px] transition-colors
                py-[9px] px-[35px] flex items-center gap-x-[8px] hover:bg-[#006865] cursor-pointer"
          onClick={changeHeightHandler}
        >
          <span className="text-[#006865] text-[17px] relative top-[-3px] group-hover:text-gray-50">
            {" "}
            مطالعه بیشتر{" "}
          </span>
          <IoIosArrowDown className="text-[#005B58] group-hover:text-gray-50" />
        </button>
      </div>
    </div>
  );
};

export default DescriptionBox;
