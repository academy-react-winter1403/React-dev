import React from "react";
import StudentIcon from "../../../core/icons/courses/StudentIcon";
import { HiOutlineUser } from "react-icons/hi2";

const TeacherSection = ({ studentsOfNum, teacherName }) => {
  return (
    <>
      <div className="right flex items-center gap-x-[3px]">
        <HiOutlineUser style={{ color: "#888888" }} />
        <p className="text-[#888888]">{teacherName}</p>
      </div>
      <div className="left flex items-center gap-x-[5px]">
        <span className="text-[#AAAAAA]">{studentsOfNum}</span>
        <StudentIcon />
      </div>
    </>
  );
};

export default TeacherSection;
