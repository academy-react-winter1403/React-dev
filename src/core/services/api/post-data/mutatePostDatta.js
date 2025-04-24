import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const mutatePostData = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            const [endUrl, dataObj, config] = data
            const dataInfo = await htttp.put(endUrl, dataObj, config)
            return dataInfo
        }
    })
}