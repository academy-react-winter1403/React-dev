import React from "react";
import TeacherTopSection from "./TeacherTopSection";
import { useTranslation } from "react-i18next";
import TeacherFilter from "../../common/TeacherFilter";
import { TeacherData } from "../../../core/TeacherData/TeacherFilterMock";
import TeacherCard from "./TeacherCard";

const Teachers = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  const getTeacherData = TeacherData(t);
  // const sortTypeChangeHandler = (sortTypeEvent) => {
  //   // console.log(sortTypeEvent);
  //   if (sortTypeEvent === "صعودی") {
  //     dispatch(changeSortTypeArticles("ASC"));
  //   }
  //   if (sortTypeEvent === "نزولی") {
  //     dispatch(changeSortTypeArticles("DESC"));
  //   }
  // };
  return (
    <div className="w-full  bg-[var(--bg-main)] font-b-yekan flex justify-center items-center">
      <div className=" w-[80%] max-w-[1202px]">
        {/* Top Section */}
        <div dir={isRTL ? "rtl" : "ltr"} className="mb-9">
          <TeacherTopSection />
        </div>
        {/* Bottom Section */}
        <div className="w-full mt-2  flex flex-col justify-between items-center">
          {/* filter */}
          <div className={` w-full h-11 flex flex-row flex-nowrap items-end gap-4 font-b-yekan ${isRTL ? "md:flex-row" : "md:flex-row-reverse"}`}>
            <p className="text-[var(--login-text)] font-bold leading-loose"> {t("ourTeachers")}</p>
            <TeacherFilter
              dataMap={getTeacherData}
              // onChange={sortTypeChangeHandler}
              placeholder={t("mostExperienced")}
            />
          </div>
          {/* cards */}
          <div className=" w-full mt-10">
            <TeacherCard/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teachers;
