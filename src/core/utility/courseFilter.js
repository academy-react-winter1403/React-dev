<<<<<<< HEAD
// import { getItemLocalStorage } from "../hooks/local-storage/getItemLocalStorage";
// import { htttp } from "../services/interceptor";
// // import { changeAddDataFlag, firstAddProduct } from "../../redux/actions";
// import { changeAddDataFlag, firstAddCourseProduct } from "../../redux/actions";
// // import { getDataByClick } from "../services/api/get-data-by-click/getDataByClick";
=======
import { getItemLocalStorage } from "../hooks/local-storage/getItemLocalStorage";
import { htttp } from "../services/interceptor";
// import { changeAddDataFlag, firstAddProduct } from "../../redux/actions";
// import { changeAddDataFlag, firstAddCourseProduct, firstAddProduct } from "../../redux/actions";
// import { getDataByClick } from "../services/api/get-data-by-click/getDataByClick";
>>>>>>> 82502e7678b32a275b0447216e143e7ef594990c

// // const {mutate} = getDataByClick()
// export const courseFilter = (searchParams, dispatch) => {
//   const technologi = getItemLocalStorage("technologi");
//   const courseLevelId = getItemLocalStorage("courseLevelId");
//   const courseTypeId = getItemLocalStorage("CourseTypeId");
//   const searchQuery = getItemLocalStorage("searchValue");
//   const sortValue = localStorage.getItem("sortText");

//   // console.log(sortValue)

//   dispatch(changeAddDataFlag(true))

//   const handler = async (params) => {
//     if (technologi) {
//       params.set("TechCount", "2");
//       params.set("ListTech", technologi);
//     }

//     if (courseLevelId) {
//       params.set("courseLevelId", courseLevelId);
//     }

//     if (courseTypeId) {
//       params.set("CourseTypeId", courseTypeId);
//     }

//     if (searchQuery) {
//       params.set("Query", searchQuery);
//     }else {
//       params.set("Query", "");
//     }

//     if (sortValue) {
//         if (sortValue === "جدیدترین ها") {
//             params.set("SortingCol", "Active")
//         };
//     }

//     dispatch(firstAddCourseProduct(null))
//     const data = await htttp.get(
//         `/Home/GetCoursesWithPagination?PageNumber=${1}&RowsOfPage=6&
//         ${sortValue ? `&SortingCol=${params.get("SortingCol")}` : ''}&
//         ${searchQuery && searchQuery !== null ? `&Query=${searchQuery}` : ''}&
//         ${technologi && technologi.length !== 0 ? `ListTech=${technologi}` : ''}&
//         ${courseLevelId && courseLevelId.length !== 0 ? `courseLevelId=${courseLevelId}` : ''}&
//         ${courseTypeId && courseTypeId.length !== 0 ? `CourseTypeId=${courseTypeId}` : ''}`
//     );

// <<<<<<< HEAD
<<<<<<< HEAD
//     dispatch(firstAddCourseProduct(data.data.courseFilterDtos))
// =======
    
    
//     dispatch(firstAddProduct(data.data.courseFilterDtos))
// >>>>>>> 96d578dd15fc79e5d55ce9cf282bd2886affc466
//     console.log(data.data.courseFilterDtos);
//   };
=======
    
    
    dispatch(firstAddProduct(data.data.courseFilterDtos))
// =======
    dispatch(firstAddCourseProduct(data.data.courseFilterDtos))
// >>>>>>> 21a038ce3feace628afe1f449fc089c5a5248056
    console.log(data.data.courseFilterDtos);
  };
>>>>>>> 82502e7678b32a275b0447216e143e7ef594990c

//   searchParams((params) => {
//     handler(params);
//     return params;
//   });
// };
