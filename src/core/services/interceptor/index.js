import axios from "axios";
import { requestErrorHandler } from "../../utility/requestErrorHandler";
import { getItemLocalStorage } from "../../hooks/local-storage/getItemLocalStorage";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { baseUrl } from "../api/baseUrl";

// const baseUrl = import.meta.env.VITE_BASE_URL
const baseUrl = "https://classapi.sepehracademy.ir/api";

//token
const token = getItemLocalStorage("token");

// console.log(token)
export const htttp = axios.create({
  baseURL: baseUrl,
});

const onSucces = (response) => {
  console.log("onSucces ==>", response)
  // console.log(response)
  // console.log(baseUrl);
  return response;
};

const onError = (error) => {
  if (!token) {
    toast("لطفا ابتدا وارد پنل کاربری خود شوید")
    window.location.pathname = '/Authorize/Login/Step1'
  }
  requestErrorHandler(error);
  console.log("onError", error)
  // let errorCode;
  // if (!error.response) {
  //   errorCode = requestErrorHandler(401)
  // }else {
  // }
  return error
};

htttp.interceptors.response.use(onSucces, onError);

htttp.interceptors.request.use((opt) => {
  if (token) {
    opt.headers.Authorization = "Bearer " + token;
  }
  return opt;
});
