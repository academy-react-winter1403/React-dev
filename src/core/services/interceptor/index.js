import axios from "axios";
import { requestErrorHandler } from "../../utility/requestErrorHandler";

const baswUrl = import.meta.env.VITE_BASE_URL

export const htttp = axios.create({
    baseURL: baswUrl
})

const onSucces = (response) => {
    return response.data
}

const onError = (error) => {
    requestErrorHandler(error.response.status)
}

htttp.interceptors.response.use(onSucces, onError)