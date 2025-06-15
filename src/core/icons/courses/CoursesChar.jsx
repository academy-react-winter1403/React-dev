import React from "react";
import charCard from "../../../assets/pics/courses/charCard.png";
import char from "../../../assets/pics/courses/char.png";

const CoursesCharectorIcon = ({ isRTL }) => {
  return (
    // <div
    //   // className="courses-char relative mt-[-220px] ml-[-28px] w-[400px] bg-no-repeat bg-center
    //   // flex justify-center items-center float-left z-[2]
    //   // max-xl:w-[371px] max-xl:left-[-63px] max-lg:w-[307px]
    //   // max-md:hidden max-md:mt-[0] max-md:left-0 max-md:ml-0"
    //   // style={{
    //   //   backgroundImage: "url(" + charCard + ")",
    //   //   backgroundSize: "100% 94%",
    //   // }}
    //   className={`relative bg-no-repeat bg-center flex justify-center items-end z-[2]
    //     w-[400px] max-xl:w-[371px] max-lg:w-[307px] max-md:hidden
    //     ${isRTL ? "ml-[0]  mr-[-30px]" : "mr-[0] ml-[-30px]"}
    //     flex-shrink-0`}
    //   style={{
    //     backgroundImage: `url(${charCard})`,
    //     backgroundSize: "100% 94%",
    //   }}
    // >
    //   <img
    //     src={char}
    //     alt=""
    //     // className="w-[61%] h-[347px] max-xl:h-[325px] relative top-[-37px] max-lg:h-[280px] max-md:h-[347px]"
    //     className="w-[61%] h-[347px] max-xl:h-[325px] max-lg:h-[280px] relative bottom-[20px]"
    //   />
    // </div>

    <div
  className="relative bg-no-repeat bg-center flex justify-center items-end z-[2]
    w-[400px] max-xl:w-[371px] max-lg:w-[307px] max-md:hidden
    flex-shrink-0"
  style={{
    backgroundImage: `url(${charCard})`,
    backgroundSize: "100% 94%",
  }}
>
  <img
    src={char}
    alt=""
    className="w-[61%] h-[347px] max-xl:h-[325px] max-lg:h-[280px] relative bottom-[20px]"
  />
</div>

  );
};

export default CoursesCharectorIcon;


