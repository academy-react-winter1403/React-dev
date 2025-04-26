import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const getCommentDataByClick = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            console.log(data)
            const [endUrl, productId] = data
            const dataFull = await htttp.get(`${endUrl}${productId}`)
            return dataFull
        }
    })
}