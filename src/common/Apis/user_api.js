import { deleteRequest, getRequest } from "../requast";

export const fetchuserRequest = () => {
    return getRequest('comments/');
}

export const deleteUserRequest = (id) => {
    return deleteRequest("comments/" , id)
}