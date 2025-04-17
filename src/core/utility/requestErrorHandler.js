import { deleteItemLocalStorage } from "../hooks/local-storage/deleteItemLocalStorage";

export const requestErrorHandler = (statusCode, statusMessage) => {
  if (statusCode === 401) {
    // alert("Error 401");

    // deleteItemLocalStorage('token')
    // window.location.pathname = '/'
  }
  if (statusCode >= 404 && statusCode < 500) {
    alert("Client Error:", statusMessage);
  }
};
