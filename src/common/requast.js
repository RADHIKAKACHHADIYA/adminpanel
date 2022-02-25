import axios from "axios";
import { baseUrl } from "../url/baseUrl";

export const axiosInstance = axios.create ({
    baseURL : baseUrl,
    timeout : 3000
})
export const sendRequest = (config) => {
    return axiosInstance.request(config)
}
export const getRequest = () => {
    return sendRequest({
        url : 'doctor/',
        method : 'get'
    });
}