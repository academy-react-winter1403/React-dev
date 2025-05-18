import { toast } from "react-toastify";
import { deleteItemLocalStorage } from "../hooks/local-storage/deleteItemLocalStorage";

export const requestErrorHandler = (error) => {
  if (error.status === 401 || error.message === "Network Error") {
    // deleteItemLocalStorage("token");
    window.location.pathname = "/Authorize/Login/Step1";
    // toast("لطفا ابتدا وارد پنل کاربری خود شوید")
    // toast("Network Error")
  }
  // if (error.status === 200) {
  //   toast(error.data.message)
  // }
  if (error.status >= 400 && error.status < 500) {
    toast(error.response.data.ErrorMessage[0])
  }
};
