import axios from "axios"

const api = "https://portfolio-server-9cfw.onrender.com/api/messages"


export const sendMessage = (body: any) => {
    return axios.post(api, body)
}



