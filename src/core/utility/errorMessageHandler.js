import { toast } from "react-toastify"

export const errorMessageHandler = (statusCode) => {
    if (statusCode === 401) {
        toast("لطفا ایتدا ثبت نام کنید")
    }
}