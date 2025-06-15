import React from "react";
import StarIcon from "../../../core/icons/courses/StarIcon";
import { LevelIcon } from "../../../core/icons/icons";
import { IoTimeOutline } from "react-icons/io5";

const ScoreSection = ({ levelText, timeText, timeFlag, viewFlag }) => {
  return (
    <>
      <div className="rigth flex items-center">
        {timeFlag ? <LevelIcon /> : <IoTimeOutline size={18} color="#888888"/>}
        <p className={`text-[#888888] indent-1 ${viewFlag && "text-ellipsis text-nowrap w-[80%]"}
          overflow-x-hidden`}
        >{timeFlag ? levelText : timeText}</p>
      </div>

      <div className="left">
        <StarIcon repeatNum={3} />
      </div>
    </>
  );
};

export default ScoreSection;
