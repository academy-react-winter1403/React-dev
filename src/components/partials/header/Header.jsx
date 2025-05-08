import React from "react";
import AccountBtn from "../../common/AccountBtn";
import Logo from "../../../core/icons/Logo";
import HeaderMiddlePart from "./HeaderMiddlePart";
import HeaderIcons from "./HeaderIcons";
import { useLocation } from "react-router-dom";
import Themes from "../themes/Themes";

const Header = () => {
  const isLocation = useLocation();

  return (
    <div className="w-full holder bg-[var(--bg-main)] font-b-yekan flex justify-center">
      <div
        className="holder header-container w-full 2xl:w-[1536px] mt-[53px] mb-[20px] max-w-[1550px]
        flex justify-center"
      >
        <div className="w-[80%] h-[50px] flex  flex-row-reverse flex-nowrap  justify-between">
          <div
            className="flex flex-row-reverse 
             sm:justify-center"
          >
            <div>
              {isLocation.pathname.includes("/Authorize") === false ?  <AccountBtn /> : null }
              {/* {isLocation.pathname.includes("/Authorize") === false ?  <AccountBtn /> : null } */}

            </div>
            {isLocation.pathname.includes("/Authorize") === false ?  <HeaderIcons /> : null }
              <Themes />
          </div>
              {isLocation.pathname.includes("/Authorize") === false ?   <HeaderMiddlePart /> : null }
          <div
            className="flex overflow-hidden 
         md:w-[13%] md:h-[40px] md:block lg:w-[15%] lg:h-[50px] lg:block sm:w-[10%] sm:h-[30px] sm:block  xs:hidden "
          >
            <Logo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
