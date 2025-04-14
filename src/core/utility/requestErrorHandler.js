import { deleteItemLocalStorage } from "../hooks/local-storage/deleteItemLocalStorage";

export const requestErrorHandler = (statusCode, statusMessage) => {
  if (statusCode === 401) {
    deleteItemLocalStorage('token')
    window.location.pathname = '/Authorize/Login/Step1'
    // console.log("erroooorrrrr")
    return 401
  }
  if (statusCode >= 404 && statusCode < 500) {
    alert("Client Error:", statusMessage);
  }
};
