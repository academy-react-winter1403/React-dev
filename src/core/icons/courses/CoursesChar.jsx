import React from "react";
import charCard from "../../../assets/pics/courses/charCard.png";
import char from "../../../assets/pics/courses/char.png";

const CoursesCharectorIcon = () => {
  return (
    <div
      className="courses-char absolute top-0 left-[-22px] w-[400px] bg-no-repeat bg-center
      flex justify-center items-center float-left"
      style={{
        backgroundImage: "url(" + charCard + ")",
        backgroundSize: "100% 94%",
      }}
    >
      <img
        src={char}
        alt=""
        className="w-[61%] h-[347px] relative top-[-37px]"
      />
    </div>
  );
};

export default CoursesCharectorIcon;
