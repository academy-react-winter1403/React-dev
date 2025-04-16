import { baseUrl } from "./api/baseUrl";
import { getData } from "./api/get-data/getData";
import { postData } from "./api/post-data/postData";
import { putData } from "./api/put-data/putData";
import { deleteDataApi } from "./api/delete-data/deleteData";
import { getCommentData } from "./api/get-data/getCommentData";
import { getFilterData } from "./api/get-data/getFiilterData";
import { likeCourseCommentPost } from "./api/post-data/likeCourseCommentPost";
import { desLikeCourseCommentPost } from "./api/post-data/desLikeCourseCommentPost";
import { getDataByClick } from "./api/get-data-by-click/getDataByClick";
import { getDataUserPanel } from "./api/get-data/getDataUserPanel";
import { getNewData } from "./api/get-data/getNewsData";
import { getActivedCourseData } from "./api/get-data/getActivedData";
import { getCourseReservedUserPanel } from "./api/get-data/getCourseReservUserPanel";
import { getMyCourseData } from "./api/get-data/getMyCourseData";


export {
  baseUrl,
  getData,
  getDataByClick,
  postData,
  putData,
  deleteDataApi,
  getCommentData,
  getFilterData,
  likeCourseCommentPost,
  desLikeCourseCommentPost,
  getDataUserPanel,
  getNewData,
  getActivedCourseData,
  getCourseReservedUserPanel,
  getMyCourseData
};