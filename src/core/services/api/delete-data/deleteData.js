import { htttp } from "../../interceptor"

export const deleteDataApi = async (endUrl, productId) => {
    let data = await htttp.delete(endUrl,productId)
    return data
}