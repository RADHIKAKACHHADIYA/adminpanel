import { addRequest, deleteRequest, getRequest, updateRequest } from "../requast"

export const fatchAllDoctorData = () => {
    return getRequest('doctor/')
}

export const deleteDoctorData = ( id) => {
    return deleteRequest('doctor/' ,id)
}

export const addDoctorData = (data) => {
    return addRequest('doctor/' , data)
}

export const updeteDoctorData = (data) => {
    return updateRequest('doctor/' , data )
}