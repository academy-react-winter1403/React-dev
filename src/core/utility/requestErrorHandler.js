import { toast } from "react-toastify";
import { deleteItemLocalStorage } from "../hooks/local-storage/deleteItemLocalStorage";

export const requestErrorHandler = (error) => {
  // console.log(error);
  if (error.status === 401) {
    deleteItemLocalStorage("token");
    window.location.pathname = "/Authorize/Login/Step1";
  }
  if (error.status === 200) {
    toast(error.data.message)
  }
  if (error.status >= 400 && error.status < 500) {
    error.response.data.ErrorMessage.map((item, index) => {
      toast(item);
    })
  }
};
