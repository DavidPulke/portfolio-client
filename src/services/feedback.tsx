
import { toast, type ToastOptions } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let styleSettings = (time: number): ToastOptions => {
    return {
        position: "bottom-right",
        autoClose: time,
        theme: "dark"
    }
}

export function successMsg(msg: string) {
    toast.success(msg, styleSettings(3000));
}

export function errorMsg(msg: string) {
    toast.error(msg, styleSettings(4000));
}

