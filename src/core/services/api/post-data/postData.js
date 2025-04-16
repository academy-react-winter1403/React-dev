import { htttp } from "../../interceptor"

export const postData = async (endUrl, dataObj) => {
    console.log(dataObj)
    let data = await htttp.post(endUrl, dataObj)
    console.log(data)
    return data
}