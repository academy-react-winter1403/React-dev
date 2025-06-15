import React from "react";
import StudentIcon from "../../../core/icons/courses/StudentIcon";
import { HiOutlineUser } from "react-icons/hi2";

const TeacherSection = ({ studentsOfNum, teacherName }) => {
  return (
    <>
      <div className="right w-[75%] flex items-center gap-x-[3px]">
        <HiOutlineUser style={{ color: "text-[var(--course-text)]" }} />
        <p 
          className="teacher-name text-[var(--course-text)] w-[100%] text-ellipsis overflow-hidden text-nowrap"
          title={teacherName}
        >{teacherName}</p>
      </div>
      <div className="left flex items-center gap-x-[5px]">
        <span className="text-[#888888]">{studentsOfNum}</span>
        <StudentIcon style={{ color: "text-[var(--course-text)]" }}/>
      </div>
    </>
  );
};

export default TeacherSection;
