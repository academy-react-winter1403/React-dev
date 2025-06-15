import React from "react";
import { motion } from "framer-motion";
import BgStep from "./../../../assets/pics/authorize/BgAuthorize.png";
import FooterAuthorize from "../footerAuthorize/FooterAuthorize";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
// import Aos from "aos";

const LoginBg = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useTranslation();

  const getCssVar = (varName) =>
    getComputedStyle(document.documentElement).getPropertyValue(varName);

  const loginPointerColor = getCssVar("--login-pointer-div") || "#c3d3bd";

  return (
    <>
      <div
        className="w-full lg:h-[899px] md:h-[800px] sm:h-[600px] xs:h-[550px] mx-auto flex flex-col justify-center items-center bg-[var(--bg-main)] font-b-yekan"
        style={{
          backgroundImage: `url(${BgStep})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "40% 50%",
          backgroundSize: "67%",
        }}
      >
        <div className="lg:w-[952px] lg:h-[631px] md:w-[850px] md:h-[500px] sm:w-[600px] sm:h-[450px] xs:w-[450px] xs:h-[350px] flex justify-between z-[1]">
          <div className="mt-[105px]">
            <button
              className="w-[69px] h-[34px] text-[var(--filter-text)]
 font-bold sm:text-2xl xs:text-xl font-b-yekan cursor-pointer"
              onClick={() => {
                navigate("/Authorize/Register/step1");
              }}
            >
              {/* ثبت نام */}
              {t("register")}
            </button>
            <button
              className="w-[41px] h-[34px] text-[var(--filter-text)] font-bold sm:text-2xl xs:text-xl mx-auto mt-[51px] font-b-yekan cursor-pointer"
              onClick={() => {
                navigate("/Authorize/Login/step1");
              }}
            >
              {/* ورود */}
              {t("enter")}
            </button>
          </div>
          <div className="lg:w-[869px] lg:h-[631px] md:w-[750px] md:h-[500px] sm:w-[500px] sm:h-[450px] xs:w-[450px] xs:h-[400px]  flex justify-center items-center relative backdrop-blur-xs bg-gradient-to-tl from-[#01CEC9BF]/75 to-[#E48900BF]/75 rounded-4xl">
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
              transition={{ duration: 1, delay: 0.6 }}
            ></motion.div> 

            <motion.div
              className="size-20 rounded-3xl absolute right-[0] top-[85px]"
              initial={{
                y: location.pathname === "/Authorize/Login/step1" ? 0 : 85,
                rotate: 45,
                x: 15,
                backgroundColor: loginPointerColor,
              }}
              animate={{
                y: location.pathname === "/Authorize/Login/step1" ? 85 : 0,
                backgroundColor: loginPointerColor,
                x: 15,
              }}
              transition={{ duration: 1, delay: 0.6 }}
            ></motion.div>

            {children}
          </div>
        </div>
        <FooterAuthorize />
      </div>
      {/* <FooterAuthorize /> */}
    </>
  );
};

export default LoginBg;
