import React from "react";
import charCard from "../../../assets/pics/courses/charCard.png";
import char from "../../../assets/pics/courses/char.png";

const CoursesChar = () => {
  return (
    <div
      className="courses-char relative w-[400px] h-[397px] bg-no-repeat bg-center flex justify-center items-center float-left"
      style={{ backgroundImage: "url(" + charCard + ")", backgroundSize: "419px 94%" }}
    >
      {/* <img src={charCard} alt="" className="absolute"/> */}
      <img src={char} alt="" className="w-[255px] h-[413px] relative top-[-37px]"/>
    </div>
  );
};

export default CoursesChar;
