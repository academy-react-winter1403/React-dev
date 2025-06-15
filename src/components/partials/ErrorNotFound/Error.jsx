import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import ErrorPageGame from "./ErrorPageGame";
import error from "../../../assets/pics/Bg/error.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import errorpic from "../../../assets/404pic.png";
import { useTranslation } from "react-i18next";

const Error = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  const handleGoToHome = () => {
    navigate("/landing");
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const isRTL = i18n.language === "fa";

  return (
    <div
      className={`w-[55%] h-[450px] rounded-2xl shadow m-auto flex flex-col font-b-yekan items-center py-8 px-16 relative overflow-hidden bg-gradient-to-tl from-[#01CEC9BF] to-[#E48900BF] ${isRTL ? "rtl" : "ltr"}`}
    >
      {/* top */}
      <div className="w-full h-[20%] flex items-center justify-center whitespace-nowrap">
        <p className="text-[#003B390D] font-normal drop-shadow-2xl md:text-8xl xs:text-6xl text-center font-cherry">
          Error 404!
        </p>
      </div>

      {/* bottom */}
      <div 
       className={`w-full h-[80%] flex flex-nowrap justify-between ${isRTL ? "flex-row" : "flex-row-reverse"}`}
      >
        {/* text */}
        <div 
        className={`h-full w-[40%] flex flex-col gap-5 font-b-yekan whitespace-nowrap ${isRTL ? "items-start" : "items-end"}`}
        >
          <p className="font-bold md:text-6xl xs:text-4xl text-[var(--login-text)]">
            {t("notFound")}
          </p>
          <p className="lg:text-xl md:text-[18px] xs:text-[14px] text-[var(--login-text)] mt-10">
            {t("lostMessage")}
          </p>
          <p className="lg:text-xl md:text-[18px] xs:text-[14px] text-[var(--login-text)]">
            {t("notAvailable")}
          </p>

          {/* button */}
          <button
            onClick={handleGoToHome}
            className="bg-[#E48900] hover:bg-[#be7405] transition h-9 w-40 rounded-3xl shadow-lg text-white p-1 cursor-pointer text-center m-auto"
            data-aos="zoom-in"
          >
            {t("goHome")}
          </button>
        </div>

        {/* img */}
        <img
          src={errorpic}
          alt="#"
          className={`w-[450px] h-[300px] absolute z-50 ${isRTL ? "left-0" : "right-0"} hidden lg:block`}
        />
      </div>
    </div>
  );
};

export default Error;
