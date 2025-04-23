import { useQuery } from "react-query";
import { htttp } from "../../interceptor";

export const getDataUserPanel = (key, endUrl, token, flag) => {
  return useQuery({
    queryKey: key,
    queryFn: async () => {
      const infoData = await htttp.get(endUrl, {
        headers: {
          Authorization: token ? token : null,
        },
      });
      return infoData.data
    },
  });
};
