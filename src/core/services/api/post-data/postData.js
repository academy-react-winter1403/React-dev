import { htttp } from "../../interceptor"

export const postData = async (endUrl, dataObj) => {
    let data = await htttp.post(endUrl, dataObj)
    return data
}