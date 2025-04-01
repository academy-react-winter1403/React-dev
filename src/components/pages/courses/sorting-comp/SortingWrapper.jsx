import React, { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { MdKeyboardArrowDown } from "react-icons/md";

const SortingWrapper = ({ children, title, innerWidth }) => {

  const [widthFlag, setWidthFlag] = useState(false)
  const [clickFlag, setClickFlag] = useState(false)

  const sortClickHandler = () => {
    if (innerWidth < 1023 ) {
      // alert("kochik")
      setWidthFlag(false)
      clickFlag ? (setClickFlag(false)) : setClickFlag(true)
      // alert(clickFlag)
    }else {
      // alert("bozorg")
      setWidthFlag(true)
      clickFlag ? setClickFlag(false) : setClickFlag(true)
    }
    // sortClick()
  }

  return (
    <div className="group relative z-1" onClick={sortClickHandler}>
      <button
        className="flex items-center justify-around w-[207px] max-lg:w-[330px] h-[45px] bg-[#FFFFFF]
        drop-shadow-[0_1px_3px_#00000040] rounded-[13px_13px_0_0]"
      >
        <BiMenuAltRight size={25} style={{color: "#005B58"}}/>
        <p className="text-[17px] text-[#333333] font-[400] mt-[-3px]">{title}</p>
        <MdKeyboardArrowDown size={27} style={{color: "#005B58"}}/>
      </button>

      <div className={`sort-menu absolute overflow-hidden top-[41px] left-0 h-0 w-full transition-all rounded-[0_0_10px_10px]
        bg-[#fff] drop-shadow-[0_2px_3px_#ccc] px-[8px]
        ${!widthFlag ? `min-lg:group-hover:h-auto min-lg:group-hover:pb-[10px]` :
          clickFlag ? "h-0 pb-0" : "h-auto pb-[10px]"}`
        }
        >
        {children}
      </div>
    </div>
  );
};

export default SortingWrapper;
