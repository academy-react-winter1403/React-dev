import { useMutation } from "react-query"
import { htttp } from "../../interceptor"

export const deleteFavoriteProduct = (key) => {
    return useMutation({
        mutationKey: key,
        mutationFn: async (data) => {
            const [endUrl, dataObj, config] = data
            console.log(dataObj)
            const dataFull = await htttp.delete(endUrl, {
                headers: {
                    "Content-Type": "multipart/form-data"
                },
            })
            // dataObj
            return dataFull.data
        }
    })
}