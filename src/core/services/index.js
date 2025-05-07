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
import { mutatePostData } from "./api/post-data/mutatePostDatta";
import { updateUserInformation } from "./api/put-data/updateUserInfo";
import { addCourseFavoritePost } from "./api/post-data/addCourseFavoritePost";
import { addCourseComment } from "./api/post-data/addCourseComment";
import { getCommentDataByClick } from "./api/get-data/getCommentDataByClick";
import { getArticleCommentData } from "./api/get-data/getArticleCommentData";
import { getProductData } from "./api/get-data/getProductData";
import { getCourseDataByClick } from "./api/get-data-by-click/getCourseDataByClick";
import { getCommentOneData } from "./api/get-data/getCommentOneData";
import { dislikeComment } from "./api/post-data/disLikeComment";
import { reservCourse } from "./api/post-data/reservCourse";


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
  getMyCourseData,
  mutatePostData,
  updateUserInformation,
  addCourseFavoritePost,
  addCourseComment,
  getArticleCommentData,
  getCommentDataByClick,
  getProductData,
  getCourseDataByClick,
  getCommentOneData,
  dislikeComment,
  reservCourse
};