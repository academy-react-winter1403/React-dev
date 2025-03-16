import { htttp } from "../../interceptor"

export const getData = async (endUrl) => {
    let data = await htttp.get(endUrl)
    return data
}