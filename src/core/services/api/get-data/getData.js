import { useQuery } from "react-query";
import { htttp } from "../../interceptor";

export const getData = async (key, endUrl) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      // try {
        let data = await htttp.get(endUrl)
        return data.data
      // }catch (error) {
        // return error
      // }
    }
  })
};
