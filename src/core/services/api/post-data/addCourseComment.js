import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const addCourseComment = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            const [endUrl, dataObj, config] = data
            const fullData = await htttp.post(endUrl, dataObj, config)
            return fullData
        },
        onSuccess: (response)=>{
            console.log("response",response)
        }
    })
}