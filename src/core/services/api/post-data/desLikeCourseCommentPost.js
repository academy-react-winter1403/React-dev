import { htttp } from "../../interceptor";

export const desLikeCourseCommentPost = async (endUrl, courseCommentId) => {
  let data = await htttp.post(`${endUrl}=${courseCommentId}`);
  try {
    return data;
  } catch (error) {
    // return data
  }
};
