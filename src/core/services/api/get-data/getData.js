import { useQuery } from "react-query";
import { htttp } from "../../interceptor";
import axios from "axios";

export const getData = (key, endUrl) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      let data = await htttp.get(endUrl);
      return data.data;
    },
  });
};