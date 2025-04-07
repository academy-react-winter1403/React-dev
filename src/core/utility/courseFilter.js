import { getItemLocalStorage } from "../hooks/local-storage/getItemLocalStorage";
import { htttp } from "../services/interceptor";
import { changeAddDataFlag, firstAddProduct } from "../../redux/actions";

export const courseFilter = (searchParams, dispatch, useSelector) => {
  const technologi = getItemLocalStorage("technologi");
  const courseLevelId = getItemLocalStorage("courseLevelId");
  const courseTypeId = getItemLocalStorage("CourseTypeId");
  const searchQuery = getItemLocalStorage("searchValue");
  const sortValue = localStorage.getItem("sortText");

  dispatch(changeAddDataFlag(true))

  const handler = async (params) => {
    if (technologi) {
      params.set("TechCount", "2");
      params.set("ListTech", technologi);
    }

    if (courseLevelId) {
      params.set("courseLevelId", courseLevelId);
    }

    if (courseTypeId) {
      params.set("CourseTypeId", courseTypeId);
    }

    if (searchQuery) {
      params.set("Query", searchQuery);
    }else {
      params.set("Query", "");
    }

    if (sortValue) {
        if (sortValue === "جدیدترین ها") {
            params.set("SortingCol", "Active")
        };
    }

    dispatch(firstAddProduct(null))
    const data = await htttp.get(
        `/Home/GetCoursesWithPagination?PageNumber=${1}&RowsOfPage=6&
        ${sortValue ? `&SortingCol=${params.get("SortingCol")}` : ''}&
        ${searchQuery && searchQuery !== null ? `&Query=${searchQuery}` : ''}&
        ${technologi && technologi.length !== 0 ? `ListTech=${technologi}` : ''}&
        ${courseLevelId && courseLevelId.length !== 0 ? `courseLevelId=${courseLevelId}` : ''}&
        ${courseTypeId && courseTypeId.length !== 0 ? `CourseTypeId=${courseTypeId}` : ''}`
    );

    
    dispatch(firstAddProduct(data.data.courseFilterDtos))
    console.log(data.data.courseFilterDtos);
  };

  searchParams((params) => {
    handler(params);
    return params;
  });
};
