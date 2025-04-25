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
