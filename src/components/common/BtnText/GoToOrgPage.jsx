import React from "react";
import { SlArrowLeft } from "react-icons/sl";
import { useLocation, useNavigate } from "react-router-dom";
const GoToOrgPage = () => {
  const navigate = useNavigate();
  const Location = useLocation();
  const goToPage = () => {
    if (location.pathname === "/Authorize/Register/step1" || location.pathname === "/Authorize/Login/step1") {
      navigate("/landing");
    }
    else if (location.pathname === "/Authorize/forget-password/step1") {
      navigate("/Authorize/Login/step1")
    }
  }
  return (
    <div className="w-[112px] h-[20px] flex items-end gap-[5px] absolute bottom-[30px] left-[20px]">
      <div className="w-[88px] h-full text-xl font-normal text-[#aaa] font-b-yekan leading-none" onClick={goToPage}>
        صفحه اصلی
      </div>
      <SlArrowLeft style={{color:"#aaa",width:"13px",height:"13px"}}/>
    </div>
  );
};

export default GoToOrgPage;
