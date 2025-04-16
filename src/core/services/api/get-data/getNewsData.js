import { useQuery } from "react-query"
import { htttp } from "../../interceptor"

export const getNewData = (key, endUrl) => {
    return useQuery({
        queryKey: key,
        queryFn: async () => {
            const data = await htttp.get(endUrl)
            return data.data
        }
    })
}