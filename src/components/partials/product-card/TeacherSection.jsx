import React from "react";
import StudentIcon from "../../../core/icons/courses/StudentIcon";
import { HiOutlineUser } from "react-icons/hi2";

const TeacherSection = ({ studentsOfNum, teacherName }) => {
  return (
    <>
      <div className="right w-[75%] flex items-center gap-x-[3px]">
        <HiOutlineUser style={{ color: "#888888" }} />
        <p 
          className="teacher-name text-[#888888] w-[100%] text-ellipsis overflow-hidden text-nowrap"
          title={teacherName}
        >{teacherName}</p>
      </div>
      <div className="left flex items-center gap-x-[5px]">
        <span className="text-[#AAAAAA]">{studentsOfNum}</span>
        <StudentIcon />
      </div>
    </>
  );
};

export default TeacherSection;
