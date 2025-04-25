import { getItemLocalStorage } from "../../../hooks/local-storage/getItemLocalStorage"
import { htttp } from "../../interceptor"

const token = getItemLocalStorage("token")
export const postData = async (endUrl, dataObj) => {
    console.log(dataObj)
    let data = await htttp.post(endUrl, dataObj, {
        headers: {
            Authorization: token ? token : null,
        }
    })
    return data
}