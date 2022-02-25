import { getRequest } from "../requast"

export const fatchAllDoctorData = (path) => {
    return getRequest('doctor/')
}