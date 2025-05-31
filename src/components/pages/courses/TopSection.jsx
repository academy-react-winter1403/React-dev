// import React from "react";
// import { FaCircle } from "react-icons/fa";
// import { CoursesCharectorIcon } from "../../../core/icons/icons";
// import Input from "../../common/input/Input";
// import { MotionComp } from "../../partials";
// import { useDispatch, useSelector } from "react-redux";
// import { changeQuery, firstAddCourseProduct } from "../../../redux/actions";
// import { useSearchParams } from "react-router-dom";
// import { setItemLocalStorage } from "../../../core/hooks/local-storage/setItemLocalstorage";
// import { courseFilterFull } from "../../../core/utility/courseFilterFull";
// import { getDataByClick } from "../../../core/services";
// import { updateSearchParamsHook } from "../../../core";
// import { useTranslation } from "react-i18next";
// const TopSection = () => {
//   const dispatch = useDispatch();
//   const [searchParams, setSearchParams] = useSearchParams();
//   const { t, i18n } = useTranslation();
//   const isRTL = i18n.language === "fa";

//   const { mutate } = getDataByClick();
//   const searchHandler = async (searchValue) => {
//     updateSearchParamsHook(
//       setSearchParams,
//       "Query",
//       searchValue,
//       dispatch,
//       changeQuery
//     );

//     if (searchValue !== "") {
//       // courseFilterFull(
//       //   "/Home/GetCoursesWithPagination?",
//       //   courseQueryParams,
//       //   dispatch,
//       //   firstAddCourseProduct,
//       //   setSearchParams
//       // );
//     } else {
//       // mutate("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6", {
//       //   onSuccess: (data) => {
//       //     dispatch(firstAddCourseProduct(data.courseFilterDtos));
//       //   },
//       // });
//     }
//   };

//   const { courseQueryParams } = useSelector((state) => state);

//   return (
//     <div
//       // className="top-section-contaienr relative w-[80%] "

//       // className={`top-section-contaienr relative w-[80%] ${isRTL ? "flex-row-reverse" : "flex-row"}`}
//       // dir={isRTL ? "rtl" : "ltr"}

//       dir={isRTL ? "rtl" : "ltr"}
//   className="relative w-[80%] mx-auto"

//       // className={`top-section-container relative w-[80%] flex gap-4 items-end justify-between
//       //   ${isRTL ? "flex-row-reverse" : "flex-row"}
//       //   max-md:flex-col-reverse max-md:items-center`}
//       // className={`top-section-contaienr relative w-[80%] flex gap-4 justify-between max-md:flex-col-reverse ${
//       //   isRTL ? "flex-row" : "flex-row-reverse"
//       // }`}
//     >
//       <MotionComp xInitial={isRTL ? 100 : -100} xAnimate={0} animDuration={1}>
//         <div
//           className="top-section-control flex-1 bg-[#EBF9F982] backdrop-blur-[4px]
//     drop-shadow-[0_2px_2px_#00000040] rounded-[15px] p-[40px] 
//     max-md:w-full max-md:flex max-md:items-center max-md:mt-[20px]"
//         >
//           <div className="text-control max-md:w-full">
//             <div className="top flex items-center max-md:flex max-md:flex-col max-md:items-center">
//               <FaCircle className="text-[#01CEC9]" size={23} />
//               <h2
//                 className="font-b-yekan text-[25px] font-extrabold text-[#000000]
//                   m-0 mr-[10px] max-md:text-center"
//               >
//                 {/* {" "}
//                 دوره های آموزشی{" "} */}
//                 {t("courseTitle")}
//               </h2>
//             </div>
//             <p className="font-[400] text-[var(--course-top-text)] indent-[10px] mt-[5px] max-md:text-center">
//               {/* {" "}
//               به روز ترین دوره هایی که میتونید پیدا کنید{" "} */}
//               {t("courseDesc")}
//             </p>
//             <div className="input-control w-[60%] mt-[25px] mr-[10px] max-md:w-full">
//               {/* <Input
//                 type={"text"}
//                 placeholder={"چی میخوای یاد بگیری؟..."}
//                 change={searchHandler}
//               /> */}
//               <Input
//                 type="text"
//                 placeholder={t("headerSearchText")}
//                 change={searchHandler}
//               />
//             </div>
//           </div>
//         </div>
//       </MotionComp>
//       {/* <MotionComp xInitial={-100} xAnimate={0} animDuration={1}>
//         <CoursesCharectorIcon />
//       </MotionComp> */}
//       <MotionComp xInitial={isRTL ? -100 : 100} xAnimate={0} animDuration={1}>
//         <CoursesCharectorIcon isRTL={isRTL} />
//       </MotionComp>
//     </div>
//   );
// };

// export default TopSection;


import React from "react";
import { FaCircle } from "react-icons/fa";
import { CoursesCharectorIcon } from "../../../core/icons/icons";
import Input from "../../common/input/Input";
import { MotionComp } from "../../partials";
import { useDispatch, useSelector } from "react-redux";
import { changeQuery, firstAddCourseProduct } from "../../../redux/actions";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getDataByClick } from "../../../core/services";
import { updateSearchParamsHook } from "../../../core";

const TopSection = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === "fa";
  const { mutate } = getDataByClick();
  const { courseQueryParams } = useSelector((state) => state);

  const searchHandler = async (searchValue) => {
    updateSearchParamsHook(
      setSearchParams,
      "Query",
      searchValue,
      dispatch,
      changeQuery
    );

    if (searchValue !== "") {
      // courseFilterFull(...);
    } else {
      // mutate("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6", {
      //   onSuccess: (data) => {
      //     dispatch(firstAddCourseProduct(data.courseFilterDtos));
      //   },
      // });
    }
  };

  return (
    <div
      dir={isRTL ? "rtl" : "ltr"}
      className="relative w-[80%] mx-auto mb-34"
    >
      {/* Character Icon - Positioned absolutely */}
      <div
        className="absolute top-0 z-[2] max-md:hidden"
        style={{
          [isRTL ? "right" : "left"]: "570px",
        }}
      >
        <CoursesCharectorIcon />
      </div>

      {/* Text Content */}
      <MotionComp xInitial={isRTL ? 100 : -100} xAnimate={0} animDuration={1}>
        <div
          className="top-section-control w-full bg-[#EBF9F982] backdrop-blur-[4px]
            drop-shadow-[0_2px_2px_#00000040] rounded-[15px] p-[40px]
            max-md:flex max-md:items-center max-md:mt-[20px]"
        >
          <div className="text-control max-md:w-full">
            <div className="top flex items-center max-md:flex-col max-md:items-center">
              <FaCircle className="text-[#01CEC9]" size={23} />
              <h2
                className="font-b-yekan text-[25px] font-extrabold text-[#000000]
                m-0 mr-[10px] max-md:text-center"
              >
                {t("courseTitle")}
              </h2>
            </div>
            <p className="font-[400] text-[var(--course-top-text)] indent-[10px] mt-[5px] max-md:text-center">
              {t("courseDesc")}
            </p>
            <div className="input-control w-[60%] mt-[25px] mr-[10px] max-md:w-full">
              <Input
                type="text"
                placeholder={t("topSectionPlaceholder")}
                change={searchHandler}
              />
            </div>
          </div>
        </div>
      </MotionComp>
    </div>
  );
};

export default TopSection;
