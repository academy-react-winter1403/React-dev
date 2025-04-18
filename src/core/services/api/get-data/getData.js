import { useQuery } from "react-query";
import { htttp } from "../../interceptor";

// <<<<<<< HEAD
// export const getData = async (key,endUrl) => {
// =======
export const getData = (key, endUrl) => {
// >>>>>>> 3b724a92d4474dfa5230a32c47c56d3ae3f587f3
  return useQuery({
    queryKey: key,
    queryFn: async () => {
        let data = await htttp.get(endUrl)
        return data.data
    }
  })
};



