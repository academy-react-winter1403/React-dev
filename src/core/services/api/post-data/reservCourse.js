import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const reservCourse = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            const [endUrl, dataObj] = data
            const fullData = await htttp.post(endUrl, dataObj)
            return fullData.data
        }
    })
}