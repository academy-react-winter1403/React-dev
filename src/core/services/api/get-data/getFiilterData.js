import { useQuery } from "react-query"
import { htttp } from "../../interceptor"

export const getFilterData = async (key, endUrl) => {
    return useQuery({
        queryKey: key,
        queryFn: async () => {
            try {
                const data = await htttp.get(endUrl)
                return data.data
            }catch (error) {
                return error
            }
        }
    })
}