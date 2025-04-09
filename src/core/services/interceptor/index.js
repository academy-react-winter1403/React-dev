import axios from "axios";
import { requestErrorHandler } from "../../utility/requestErrorHandler";
import { getItemLocalStorage } from "../../hooks/local-storage/getItemLocalStorage";
// import { baseUrl } from "../api/baseUrl";

// const baseUrl = import.meta.env.VITE_BASE_URL
const baseUrl = "https://classapi.sepehracademy.ir/api";

export const htttp = axios.create({
  baseURL: baseUrl,
});

const onSucces = (response) => {
  // console.log(response)
  console.log(baseUrl);
  return response;
};

const onError = (error) => {
  requestErrorHandler(error.response.status);
};

htttp.interceptors.response.use(onSucces, onError);

/* in redux with statemanegment */

htttp.interceptors.request.use((opt) => {
  const token = getItemLocalStorage("token");
  if (token) {
    opt.headers.Authorization = "Bearer " + token;
  }
  return opt;
});
