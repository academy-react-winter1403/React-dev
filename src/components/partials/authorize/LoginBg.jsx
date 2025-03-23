import React from "react";

const LoginBg = ({ children }) => {
  return (
    <div className="w-[1440px] h-[899px] mx-auto flex justify-center items-center">
      <div className="w-[952px] h-[631px] flex justify-between z-[1]">
        <div className="mt-[105px]">
          <div className="w-[69px] h-[34px] text-[#006865] font-bold text-2xl font-[BYekan]">
            ثبت نام
          </div>
          <div className="w-[41px] h-[34px] text-[#006865] font-bold text-2xl mx-auto mt-[51px] font-[BYekan]">
            ورود
          </div>
        </div>
        <div className="w-[869px] h-[631px] flex justify-center items-center relative backdrop-blur-xs bg-gradient-to-tl from-[#01CEC9BF] to-[#E48900BF]/75 rounded-[30px]">{children}</div>
      </div>
    </div>
  );
};

export default LoginBg;
