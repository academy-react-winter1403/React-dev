import React from "react";
import { FaCircle } from "react-icons/fa";
import { CoursesCharectorIcon } from "../../../core/icons/icons";
import Input from "../../common/input/Input";
import { MotionComp } from "../../partials";
import { useDispatch, useSelector } from "react-redux";
import { changeQuery, firstAddCourseProduct } from "../../../redux/actions";
import { useSearchParams } from "react-router-dom";
import { setItemLocalStorage } from "../../../core/hooks/local-storage/setItemLocalstorage";
import { courseFilterFull } from "../../../core/utility/courseFilterFull";
import { getDataByClick } from "../../../core/services";
import { updateSearchParamsHook } from "../../../core";

const TopSection = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const { mutate } = getDataByClick();
  const searchHandler = async (searchValue) => {
    updateSearchParamsHook(setSearchParams, "Query", searchValue, dispatch, changeQuery)
    
    if (searchValue !== "") {
      // courseFilterFull(
      //   "/Home/GetCoursesWithPagination?",
      //   courseQueryParams,
      //   dispatch,
      //   firstAddCourseProduct,
      //   setSearchParams
      // );
    } else {
      // mutate("/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=6", {
      //   onSuccess: (data) => {
      //     dispatch(firstAddCourseProduct(data.courseFilterDtos));
      //   },
      // });
    }
  };

  const { courseQueryParams } = useSelector((state) => state);

  return (
    <div className="top-section-contaienr relative w-[80%] ">
      <MotionComp xInitial={100} xAnimate={0} animDuration={1}>
        <div
          className="top-section-control bg-[#EBF9F982] backdrop-blur-[4px]
            drop-shadow-[0_2px_2px_#00000040] rounded-[15px] p-[40px] 
            max-md:w-full max-md:flex max-md:items-center max-md:mt-[20px]"
        >
          <div className="text-control max-md:w-full">
            <div className="top flex items-center max-md:flex max-md:flex-col max-md:items-center">
              <FaCircle className="text-[#01CEC9]" size={23} />
              <h2
                className="font-b-yekan text-[25px] font-extrabold text-[#000000]
                  m-0 mr-[10px] max-md:text-center"
              >
                {" "}
                دوره های آموزشی{" "}
              </h2>
            </div>
            <p className="font-[400] text-[#AAAAAA] indent-[10px] mt-[5px] max-md:text-center">
              {" "}
              به روز ترین دوره هایی که میتونید پیدا کنید{" "}
            </p>
            <div className="input-control w-[60%] mt-[25px] mr-[10px] max-md:w-full">
              <Input
                type={"text"}
                placeholder={"چی میخوای یاد بگیری؟..."}
                change={searchHandler}
              />
            </div>
          </div>
        </div>
      </MotionComp>
      <MotionComp xInitial={-100} xAnimate={0} animDuration={1}>
        <CoursesCharectorIcon />
      </MotionComp>
    </div>
  );
};

export default TopSection;
