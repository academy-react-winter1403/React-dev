import React from "react";
import AccountBtn from "../../common/AccountBtn";
import Logo from "../../../core/icons/Logo";
import HeaderMiddlePart from "./HeaderMiddlePart";
import HeaderIcons from "./HeaderIcons";
import { useLocation } from "react-router-dom";
import Themes from "../themes/Themes";
// import i18n from '../../../core/utility/Bilingual/I18n';
import i18n from "i18next";
import { useTranslation } from "react-i18next";

const Header = () => {
  const isLocation = useLocation();
  const { i18n } = useTranslation();

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
              {isLocation.pathname.includes("/Authorize") === false ? (
                <AccountBtn />
              ) : null}
              {/* {isLocation.pathname.includes("/Authorize") === false ?  <AccountBtn /> : null } */}
            </div>
            {isLocation.pathname.includes("/Authorize") === false ? (
              <HeaderIcons />
            ) : null}

              {/* Dark and Bilingual */}

            <div className="flex flex-wrap items-center gap-2 px-2 py-1  rounded-md bg-[var(--bg-light)] shadow-sm xs:flex-nowrap ">
              <Themes />
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`px-3 py-1 xs:text-[10px] sm:text-xs md:text-sm  font-medium rounded transition-all duration-200
      ${
        i18n.language === "en"
          ? "bg-blue-600 text-white hover:bg-blue-700"
          : "text-blue-600 hover:bg-blue-100"
      }
      active:scale-95 cursor-pointer`}
              >
                EN
              </button>
              <button
                onClick={() => i18n.changeLanguage("fa")}
                className={`px-3 py-1 xs:text-[10px] sm:text-xs md:text-sm  font-medium rounded transition-all duration-200
      ${
        i18n.language === "fa"
          ? "bg-green-600 text-white hover:bg-green-700"
          : "text-green-600 hover:bg-green-100"
      }
      active:scale-95 cursor-pointer`}
              >
                FA
              </button>
            </div>

            
          </div>
          {isLocation.pathname.includes("/Authorize") === false ? (
            <HeaderMiddlePart />
          ) : null}
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
