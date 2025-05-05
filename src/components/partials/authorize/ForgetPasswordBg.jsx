import React from "react";
// import { motion } from "framer-motion";
import BgStep from "./../../../assets/pics/authorize/BgAuthorize.png";
import FooterAuthorize from "../footerAuthorize/FooterAuthorize";
// import { useLocation, useNavigate } from "react-router-dom";
// import Aos from "aos";

const ForgetPasswordBg = ({children}) => {
//   const navigate = useNavigate();
//   const location = useLocation();
  return (
    <>
      <div
        className="w-full lg:h-[899px] md:h-[800px] sm:h-[600px] xs:h-[550px] mx-auto flex justify-center items-center font-b-yekan"
        style={{
          backgroundImage: `url(${BgStep})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "50% 50%",
          backgroundSize: "67%",
        }}
      >
        <div className="lg:w-[952px] lg:h-[631px] md:w-[850px] md:h-[500px] sm:w-[600px] sm:h-[450px] xs:w-[450px] xs:h-[350px] flex justify-center">
          <div className="lg:w-[869px] lg:h-[631px] md:w-[750px] md:h-[500px] sm:w-[500px] sm:h-[450px] xs:w-[450px] xs:h-[400px]  flex justify-center items-center relative backdrop-blur-xs bg-gradient-to-tl from-[#01CEC9BF]/75 to-[#E48900BF]/75 rounded-4xl">
            {children}
          </div>
        </div>
      </div>
      <FooterAuthorize />
    </>
  );
};

export default ForgetPasswordBg;
