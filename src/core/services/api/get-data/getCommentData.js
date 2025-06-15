import { useQuery } from "react-query";
import { htttp } from "../../interceptor";

export const getCommentData = (key, endUrl) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const data = await htttp.get(endUrl);
      return data;
    },
  });
};


export const getCourseCommentData = (key, commentUrl, ene) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      let dataObj = {}
      const commentData = await htttp.get(commentUrl)
      const replayData = await Promise.all(commentData.data.map( async (item) => {
        const data = await htttp.get(`/Course/GetCourseReplyCommnets/${item.courseId}/${item.id}`)
        dataObj = {...item, commentReplay: data.data}
        return dataObj
      }))
      return replayData
    },
    refetchOnReconnect: true
  })
}