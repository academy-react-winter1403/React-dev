import { htttp } from "../../interceptor"

export const likeCommentPost = async (endUrl, courseCommentId) => {
    const data = await htttp.post(`${endUrl}${courseCommentId}`)
    return data.data
}