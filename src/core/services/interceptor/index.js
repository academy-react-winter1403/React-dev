import axios from "axios";

const baswUrl = import.meta.env.VITE_BASE_URL

export const htttp = axios.create({
    baseURL: baswUrl
})

htttp.interceptors.response.use()