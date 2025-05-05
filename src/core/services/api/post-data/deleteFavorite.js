import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const deleteFavoriteProduct = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            const [endUrl, dataObj, config] = data
            const dataFull = await htttp.post(endUrl, dataObj, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            })
            return dataFull.data
        }
    })
}