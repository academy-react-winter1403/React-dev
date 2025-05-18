import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const getCommentOneData = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            const [endUrl, commentId] = data
            const commentData = await htttp.get(`${endUrl}${commentId}`)
            console.log(commentData)
            return commentData
        }
    })
}