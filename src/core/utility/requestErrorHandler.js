import { deleteItemLocalStorage } from "../hooks/local-storage/deleteItemLocalStorage";

export const requestErrorHandler = (statusCode, statusMessage) => {
  if (statusCode === 401) {
// <<<<<<< HEAD
    // alert("Error 401");

    // deleteItemLocalStorage('token')
    // window.location.pathname = '/'
// =======
    deleteItemLocalStorage('token')
    window.location.pathname = '/Authorize/Login/Step1'
    return 401
// >>>>>>> 2854f4c5aa453da781654d73c6b34704abe00aff
  }
  if (statusCode >= 404 && statusCode < 500) {
    alert("Client Error:", statusMessage);
  }
};
