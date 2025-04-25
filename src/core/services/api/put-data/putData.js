import { htttp } from "../../interceptor"

export const putData = async (endUrl, data, config) => {
    let response = await htttp.put(endUrl, data, config)
    return response
}