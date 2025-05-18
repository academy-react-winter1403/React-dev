import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const dislikeComment = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            const [endUrl, commentId] = data
            const commentData = await htttp.post(`${endUrl}=${commentId}`)
            return commentData
        }
    })
}