import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const reservCourse = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            try {
                const [endUrl, dataObj] = data
                const fullData = await htttp.post(endUrl, dataObj)
                return fullData.data
            } catch (error) {
                return error
            }
        }
    })
}