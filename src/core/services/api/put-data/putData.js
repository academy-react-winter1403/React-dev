import { htttp } from "../../interceptor"

export const putData = async (endUrl, data) => {
    let response = await htttp.put(endUrl, data)
    return response
}