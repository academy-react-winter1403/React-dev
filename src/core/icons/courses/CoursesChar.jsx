import React from "react";
import charCard from "../../../assets/pics/courses/charCard.png";
import char from "../../../assets/pics/courses/char.png";

const CoursesCharectorIcon = () => {
  return (
    <div
      className="courses-char relative mt-[-220px] ml-[-28px] w-[400px] bg-no-repeat bg-center
      flex justify-center items-center float-left z-[2]
      max-xl:w-[371px] max-xl:left-[-63px] max-lg:w-[307px]
      max-md:w-[400px] max-md:mt-[0] max-md:left-0 max-md:ml-0"
      style={{
        backgroundImage: "url(" + charCard + ")",
        backgroundSize: "100% 94%",
      }}
    >
      <img
        src={char}
        alt=""
        className="w-[61%] h-[347px] max-xl:h-[325px] relative top-[-37px] max-lg:h-[280px] max-md:h-[347px]"
      />
    </div>
  );
};

export default CoursesCharectorIcon;
