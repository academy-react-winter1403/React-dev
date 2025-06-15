import React from "react";
import { useTranslation } from "react-i18next";
import Themes from "../../partials/themes/Themes";

const LanguageTheme = () => {
    const { i18n } = useTranslation();
  return (
    <div 
    // className="flex flex-wrap items-center gap-2 px-2 py-1  rounded-md bg-[var(--bg-light)] shadow-sm xs:flex-nowrap "
    className="fixed bottom-10 left-10 z-50 flex flex-wrap items-center gap-2 px-2 py-1 rounded-md bg-[var(--bg-light)] shadow-sm xs:flex-nowrap"
    >
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
  );
};

export default LanguageTheme;
