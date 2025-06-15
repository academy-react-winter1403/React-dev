import { toast } from "react-toastify";
import { deleteItemLocalStorage } from "../hooks/local-storage/deleteItemLocalStorage";

export const requestErrorHandler = (error) => {
  if (error.status === 401 || error.message === "Network Error") {
    // deleteItemLocalStorage("token");
    // window.location.pathname = "/Authorize/Login/Step1";
    // toast.error("لطفا ابتدا وارد پنل کاربری خود شوید")
    // toast("Network Error")
  }
// <<<<<<< HEAD
  if (error.status === 200) {
    // toast.success(error.data.message)
  }
// =======
  // if (error.status === 200) {
  //   toast(error.data.message)
  // }
// >>>>>>> 2383e79091d1e5cc350030a6ddf4d50645b2676e
  if (error.code >= 400 && error.code < 500) {
    console.log("kkkkkkkkkkkkkkkkkkkkk", error)
    toast.error(error.response.data.ErrorMessage[0])
  }
  // if (error.message === "Network Error") {
  //   toast.error(" لطفا ابتدا وارد حساب کاربری خود شوید ")
  // }
  // console.log("error ==>", error.)
};
