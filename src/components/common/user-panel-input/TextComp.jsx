import React from "react";
import { useTranslation } from "react-i18next";

const TextComp = ({ dataMaper, boxContainerStyle, boxControlStyle }) => {
  const { t } = useTranslation();

  return (
    <div
      className={`tab-text-container flex justify-center items-center 
        border-b-2 border-[#007875] pb-2 ${boxContainerStyle}`}
    >
      <div className={`tab-text-control flex items-center justify-between ${boxControlStyle}`}>
        {dataMaper.map((item, index) => {
          const translated = t(item);
          return (
            <p key={index} className="text-[var(--dashboard-text)] font-b-yekan text-[15px]">
              {translated}
              {item === "price" && <span>{" (تومان)"}</span>}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default TextComp;
