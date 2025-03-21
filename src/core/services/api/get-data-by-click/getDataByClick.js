import { htttp } from "../../interceptor"

export const getDataByClick = async (endUrl) => {
    let data = await htttp.get(endUrl)
    return data
}