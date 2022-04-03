import { deleteRequest, getRequest } from "../requast";

export const fetchuserRequest = () => {
    return getRequest('users/');
}

export const deleteUserRequest = (id) => {
    return deleteRequest("users/" , id)
}