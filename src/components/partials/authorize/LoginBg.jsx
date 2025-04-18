import React from "react";
import { motion } from "framer-motion";
import BgStep from "./../../../assets/pics/authorize/BgAuthorize.png";
import FooterAuthorize from "../footerAuthorize/FooterAuthorize";
import { useLocation, useNavigate } from "react-router-dom";
// import Aos from "aos";

const LoginBg = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div
        className="w-[1440px] h-[899px] mx-auto flex justify-center items-center"
        style={{
          backgroundImage: `url(${BgStep})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "40% 50%",
          backgroundSize: "67%",
        }}
      >
        <div className="w-[952px] h-[631px] flex justify-between z-[1]">
          <div className="mt-[105px]">
            <button
              className="w-[69px] h-[34px] text-[#006865] font-bold text-2xl font-b-yekan"
              onClick={() => {
                navigate("/Authorize/Register/step1");
              }}
            >
              ثبت نام
            </button>
            <button
              className="w-[41px] h-[34px] text-[#006865] font-bold text-2xl mx-auto mt-[51px] font-b-yekan"
              onClick={() => {
                navigate("/Authorize/Login/step1");
              }}
            >
              ورود
            </button>
          </div>
          <div className="w-[869px] h-[631px] flex justify-center items-center relative backdrop-blur-xs bg-gradient-to-tl from-[#01CEC9BF]/75 to-[#E48900BF]/75 rounded-4xl">
            <motion.div
              className="size-20 rounded-3xl absolute right-[0] top-[85px]"
              initial={{
                y: location.pathname === "/Authorize/Login/step1" ? 0 : 85,
                rotate: 45,
                x: 15,
                backgroundColor: "#c3d3bd",
              }}
              animate={{
                y: location.pathname === "/Authorize/Login/step1" ? 85 : 0,
                backgroundColor:
                  location.pathname === "/Authorize/Register/step1"
                    ? "#c3d3bd"
                    : location.pathname === "/Authorize/Login/step1"
                    ? "#bbd6c3"
                    : "#c3d3bd",
                x: 15,
              }}
              transition={{ duration: 1,delay: 0.6}}
            ></motion.div>
            {children}
          </div>
        </div>
      </div>
      <FooterAuthorize />
    </>
  );
};

export default LoginBg;
