import { getRequest } from "../Requests";

export const fetchAllpatientsRequest = () => {
    return getRequest('users/');
}