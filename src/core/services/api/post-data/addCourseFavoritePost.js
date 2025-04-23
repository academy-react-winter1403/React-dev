import { useMutation } from "react-query";
import { htttp } from "../../interceptor";

export const addCourseFavoritePost = (key) => {
  return useMutation({
    mutationKey: key,
    mutationFn: async (data) => {
      const [url, dataObj] = data;
      const apiData = await htttp.post(url, dataObj);
      return apiData;
    },
  });
};
