import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const likeCourseCommentPost = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            const [endUrl, courseCommentId] = data
            const commentData = await htttp.post(`${endUrl}=${courseCommentId}`)
            return commentData
        }
    })
}

// export const likeCourseCommentPost = async (endUrl, courseCommentId) => {
//     try {
//         htttp.pos
//     }catch (error) {

//     }
// }