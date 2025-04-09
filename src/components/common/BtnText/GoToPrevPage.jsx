import React from "react";
import { SlArrowRight } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";

const GoToPrevPage = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const goToPage = () => {
    if (location.pathname === "/Register/step2") {
      navigate("/Register/step1");
    }
    else if (location.pathname === "/Register/step3") {
      navigate("/Register/step2");
    }
    else if (location.pathname === "/Register/step5") {
      navigate("/Register/step4");
    }
  }
  return (
    <div className="w-[112px] h-[20px] flex items-end gap-[5px] absolute bottom-[30px] right-[20px]">
      <SlArrowRight style={{ color: "#aaa", width: "13px", height: "13px" }} />
      <div className="w-[88px] h-full text-xl font-normal text-[#aaa] font-b-yekan leading-none" onClick={goToPage}>
        صفحه قبل
      </div>
    </div>
  );
};

export default GoToPrevPage;
