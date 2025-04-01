import React, { useEffect, useState } from "react";
import TopSection from "./TopSection";
import BottomSection from "./BottomSection";
import { getData, getDataByClick } from "../../../core/services";
import { useDispatch, useSelector } from "react-redux";
import {
  addFirstFilterData,
  changeAddDataFlag,
  changePageCounter,
  changeQueryFlag,
  firstAddProduct,
} from "../../../redux/actions";
import { PaginationData } from "../../partials";
import bg from "../../../assets/pics/courses/bg1.png";
import { filterData } from "../../../core/constants";
import { useSelect } from "@heroui/react";
import { deleteItemLocalStorage } from "../../../core/hooks/local-storage/deleteItemLocalStorage";
import { deleteAllItemLocalStorage } from "../../../core/hooks/local-storage/deleteAllItem";
import { htttp } from "../../../core/services/interceptor";
import { setItemLocalStorage } from "../../../core/hooks/local-storage/setItemLocalstorage";
import { locStorageUpdateItem } from "../../../core/hooks/local-storage/updateItem";
import { getItemLocalStorage } from "../../../core/hooks/local-storage/getItemLocalStorage";

const Courses = () => {
  const dispatch = useDispatch();
  // const [addDataFlag, setAddDataFlag] = useState(false)
  const state = useSelector((state) => state);

  const { addDataFlag } = state.coursesData

  const queryFlag = state.flags.queryFlag

  let pageCount = 1

  useEffect(() => {
    if (!queryFlag) {
    deleteAllItemLocalStorage([
      "technologi",
      "courseLevelId",
      "CourseTypeId",
      "searchValue",
      "sortText",
      "pageCounter",
      "pageCounter",
    ]);
    }
  }, []);

  getData("technologie", "/Home/GetTechnologies").then((technologi) => {
    dispatch(addFirstFilterData({ data: technologi.data, type: "technologi" }));
  });

  getData("courseTypes", "/CourseType/GetCourseTypes").then((type) => {
    dispatch(addFirstFilterData({ data: type.data, type: "courseTypes" }));
  });

  getData("courseLevel", "/CourseLevel/GetAllCourseLevel").then((level) => {
    dispatch(addFirstFilterData({ data: level.data, type: "courseLevel" }));
  });

  const pageChangeHandler = async (pageNum) => {
    pageCount = pageNum
    dispatch(changePageCounter(pageNum));
    dispatch(firstAddProduct(null))
    // setAddDataFlag(true)
    dispatch(changeAddDataFlag(true))

    const data = await getDataByClick(`/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=6`)
    dispatch(firstAddProduct(data.data.courseFilterDtos))
  };


  getData(
    "product",
    `/Home/GetCoursesWithPagination?PageNumber=${pageCount}&RowsOfPage=6`
  ).then((response) => {
    if (!addDataFlag) {
      setTimeout(() => {
        dispatch(firstAddProduct(response.data.courseFilterDtos));
      }, 3000);
    }
  });

  return (
    <div
      className="courses-holder flex justify-center mt-10"
      style={{
        background: `url(${bg})`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "50% 80px",
      }}
    >
      <div className="min-md:w-[82%] max-md:w-[90%] font-b-yekan flex flex-col items-center">
        <TopSection />
        <BottomSection>
          <PaginationData
            initialPageNum={1}
            totalNum={5}
            pageChange={pageChangeHandler}
          />
        </BottomSection>
      </div>
    </div>
  );
};

export default Courses;
