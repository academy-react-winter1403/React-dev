import { useQuery } from "react-query";
import { htttp } from "../../interceptor";

export const getMyCourse = (key, endUrl, params) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
        const response = await htttp.get(endUrl, {
            params: params
        })
        return response.data
    },
    refetchOnReconnect: true
  });
};
