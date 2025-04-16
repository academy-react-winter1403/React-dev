import React from "react";
import { Outlet } from "react-router-dom";
// import FooterAuthorize from "../footerAuthorize/FooterAuthorize";
// import BgStep from "./../../../../assets/pics/authorize/BgAuthorize.png";
import BgStep from "./../../../../assets/pics/authorize/BgAuthorize.png"
import FooterAuthorize from "../../../partials/footerAuthorize/FooterAuthorize";

const LoginLayout = () => {
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
              //   onClick={() => handleClick("register")}
            >
              ثبت نام
            </button>
            <button
              className="w-[41px] h-[34px] text-[#006865] font-bold text-2xl mx-auto mt-[51px] font-b-yekan"
              //   onClick={() => handleClick("login")}
            >
              ورود
            </button>
          </div>
          <div className="w-[869px] h-[631px] flex justify-center items-center relative backdrop-blur-xs bg-gradient-to-tl from-[#01CEC9BF]/75 to-[#E48900BF]/75 rounded-4xl">
            {/* <motion.div
              className="size-20 rounded-3xl absolute right-[0] top-[85px]"
              initial={{ rotate: 45, x: 15, backgroundColor: "#c3d3bd" }}
              animate={{
                y: target === "register" ? 0 : target === "login" ? 85 : 0,
                backgroundColor:
                  target === "register"
                    ? "#c3d3bd"
                    : target === "login"
                    ? "#bbd6c3"
                    : "#c3d3bd",
                x: 15,
              }}
              transition={{ duration: 1 }}
            ></motion.div> */}
            <Outlet />
          </div>
        </div>
      </div>
      <FooterAuthorize />
    </>
  );
};

export default LoginLayout;

// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

//   const [target, setTarget] = useState("register");
//   const navigate = useNavigate()
//   const handleClick = (position) => {
//     setTarget(position);
//     if (position === "register") {
//       navigate("/Register/step1")
//     }
//     else if (position === "login") {
//       navigate("/Register/step4")
//     }
//   };

//   return (

//   );
