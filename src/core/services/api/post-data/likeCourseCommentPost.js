import { htttp } from "../../interceptor"

export const likeCourseCommentPost = async (endUrl, courseCommentId) => {
    try {
        const data = await htttp.post(`${endUrl}=${courseCommentId}`)
        return data.data
    }catch (error) {
        return error
    }
}