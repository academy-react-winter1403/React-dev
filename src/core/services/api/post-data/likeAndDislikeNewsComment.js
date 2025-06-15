import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const likeAndDislikeNewsComment = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            const [endUrl, dataObj] = data
            const response = await htttp.post(endUrl, dataObj)
            return response
        }
    })
}