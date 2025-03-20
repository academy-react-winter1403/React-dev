import { useQuery } from "react-query";
import { htttp } from "../../interceptor";

export const getData = async (endUrl) => {
  return useQuery({
    queryKey: "product",
    queryFn: async () => {
      let data = await htttp.get(endUrl)
      return data.data
    }
  })
};
