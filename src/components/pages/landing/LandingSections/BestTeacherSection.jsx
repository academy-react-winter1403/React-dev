import React from "react";
import BestTeacherBG from "../../../../core/icons/LandingIcons/BestTeacherBG";
import BestTeacherSlider from "../landingSlider/BestTeacherSlider";
import { useTranslation } from "react-i18next";

const BestTeacherSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  return (
    <div
      // className="w-full h-[470px] relative mt-7 mb-10 max-w-[1515px] mx-auto"
      dir={isRTL ? "rtl" : "ltr"}
      className="w-full h-[470px] relative mt-7 mb-10 max-w-[1515px] mx-auto"
    >
      <BestTeacherBG>
        <div
          // className="w-[80%] h-[90%]  flex flex-row flex-nowrap justify-between items-center"
          className={`w-[80%] h-[90%] flex ${
            isRTL ? "flex-row" : "flex-row-reverse"
          } flex-nowrap justify-between items-center`}
        >
          {/* text */}
          <div className="w-[40%] h-[120px] font-b-yekan whitespace-nowrap hidden md:block">
            <p
              className="text-[var(--teacher-title2)] font-normal
                lg:text-[25px] md:text-[18px] md:whitespace-normal lg:whitespace-nowrap"
            >
              <h2 className="text-[var(--teacher-title)] font-bold text-[40px] inline">
                {/* برترین اساتید */}
                {t("bestTeachersTitle")}
              </h2>
              {/* &nbsp;
                     رو همینجا پیدا می کنید!! */}
              &nbsp;{t("bestTeachersIntro")}
            </p>
            {/* <p className='text-[var(--teacher-sub-title)]  lg:text-[20px] md:text-[15px]'>
                برجسته ترین اساتید بزرگترین مجموعه برنامه نویسی <br />
                استان مازندران رو بهتر بشناسیم !
                </p> */}
            <p className="text-[var(--teacher-sub-title)] lg:text-[20px] md:text-[15px]">
              {t("bestTeachersDesc")}
            </p>
          </div>
          {/* slider */}
          <div className="w-[40%] h-full xs:m-auto" data-aos="fade-right">
            <BestTeacherSlider isRTL={isRTL} />
          </div>
        </div>
      </BestTeacherBG>
    </div>
  );
};
// text-[#268582]
export default BestTeacherSection;
