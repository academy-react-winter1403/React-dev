import { useSearchParams } from "react-router-dom";
import { getItemLocalStorage } from "../hooks/local-storage/getItemLocalStorage";
import { htttp } from "../services/interceptor";
import { useDispatch } from "react-redux";
import { firstAddProduct } from "../../redux/actions";

export const courseFilter = (searchParams, dispatch) => {
  const technologi = getItemLocalStorage("technologi");
  const courseLevelId = getItemLocalStorage("courseLevelId");
  const courseTypeId = getItemLocalStorage("CourseTypeId");
  const searchQuery = getItemLocalStorage("searchValue");

  console.log(searchQuery);

  const handler = async (params) => {
    // let data = []

    if (technologi) {
      params.set("TechCount", "2");
      params.set("ListTech", technologi);
      //   dispatch(firstAddProduct(null));
      //   const newData = await htttp.get(
      //     `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&TechCount=2&ListTech=${technologi}`
      //   );
      //   data = [...data, newData.data.courseFilterDtos]
      //   dispatch(firstAddProduct(data));
    }

    if (courseLevelId) {
      params.set("courseLevelId", courseLevelId);
      //   const newData = await htttp.get(
      //     `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&courseLevelId=${courseLevelId}`
      //   );
    }

    if (courseTypeId) {
      params.set("CourseTypeId", courseTypeId);
      //   const newData = await htttp.get(
      //     `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&CourseTypeId=${courseTypeId}`
      //   );
    }

    if (searchQuery) {
      params.set("Query", searchQuery);
      const newData = await htttp.get(
        `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&Query=${searchQuery}`
      );
      //   console.log(newData.data.courseFilterDtos)
    } else {
      params.set("Query", "");
    }

    if (technologi && courseLevelId && courseTypeId && searchQuery) {
      //   const newData = await htttp.get(
      //     `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&
      //         Query=${searchQuery}&TechCount=2&ListTech=${technologi}&
      //         courseLevelId=${courseLevelId}&CourseTypeId=${courseTypeId}`
      //   );
    }

    // const data = await htttp.get(
    //     `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&
    //     TechCount=2&ListTech=${technologi ? technologi : ''}&
    //     Query=${searchQuery && searchQuery !== '' ? searchQuery : ''}&
    //     courseLevelId=${courseLevelId ? courseLevelId : ''}&
    //     CourseTypeId=${courseTypeId ? courseTypeId : ''}&`
    // )

    // const data = await htttp.get(
    //     `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10&
    //     ${technologi && `TechCount=2&ListTech=${technologi}`}&
    //     ${searchQuery && searchQuery !== '' ? `Query=${searchQuery}` : null}&
    //     ${courseLevelId && `courseLevelId=${courseLevelId}`}&
    //     ${courseTypeId && `CourseTypeId=${courseTypeId}`}&`
    // )

    // const data = await htttp.get(
    //     `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10${
    //         technologi ? `&ListTech=${technologi}` : '',
    //         searchQuery ? `&Query=${JSON.stringify(searchQuery)}` : '',
    //         courseLevelId ? `courseLevelId=${courseLevelId}` : '',
    //         courseTypeId ? `CourseTypeId=${courseTypeId}` : ''
    //     }`
    // )

    console.log("searchQuery ==>", searchQuery);
    const data = await htttp.get(
        `/Home/GetCoursesWithPagination?PageNumber=1&RowsOfPage=10
        &${searchQuery && `Query=${searchQuery}`}
        `
    );

    console.log(data.data.courseFilterDtos);
  };

  searchParams((params) => {
    handler(params);
    return params;
  });
};
