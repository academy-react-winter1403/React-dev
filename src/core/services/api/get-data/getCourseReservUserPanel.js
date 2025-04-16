import { useQuery } from "react-query"
import { htttp } from "../../interceptor"
import { getItemLocalStorage } from "../../../hooks/local-storage/getItemLocalStorage"

const token = getItemLocalStorage("token")
console.log("token ==>", token)
export const getCourseReservedUserPanel = (key, endUrl) => {
    return useQuery({
        queryKey: key,
        queryFn: async () => {
            const data = await htttp.get(endUrl)
            console.log("sssssssssssssssssssssssss ==>",data)
            return data.data
        }
    })
}