import { getRequest } from "../requast";

export const fetchAllpatientsRequest = () => {
    return getRequest('users/');
}