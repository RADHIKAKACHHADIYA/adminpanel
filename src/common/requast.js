import axios from "axios";
import { json } from "../url/baseUrl";

export const axiosInstance = axios.create ({
    baseURL : json,
    timeout : 30000
})
export const sentRequest = (config) => {
    return axiosInstance.request(config)
}
export const getRequest = (path) => {
    return sentRequest({
        url : path,
        method : 'get'
    });
}
export const deleteRequest = (path , id) => {
    return sentRequest({
        url : path + id,
        method : 'delete'
    })
}
export const addRequest = (path , data) => {
    return sentRequest({
        url : path,
        method : 'post',
        data : JSON.stringify(data),
        headers : { "Content-Type": "application/json" }
    })
}

export const updateRequest = (path , data) => {
    return sentRequest({
        url: path +  data.id,
        method: 'put',
        data: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
}