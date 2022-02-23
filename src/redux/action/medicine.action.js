import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";
import { baseUrl } from "../../url/baseUrl";
import * as ActionType from "../ActionType";


export const fetchmedicine = () => (dispatch) => {
    dispatch(loadingMedicine(true))
    setTimeout(function () {
        return fetch(baseUrl
            + 'medicine')
            .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ' : ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
                error => {
                    var errmess = new Error(error.message);
                    throw errmess;
                })
            .then(response => response.json())
            .then(medicine => dispatch({ type: ActionType.FATCH_MEDICINE, payload: medicine }))
            .catch(error => errorMedicine(error));
    }, 1000)
}
export const loadingMedicine = (status) => (dispatch) => {
    dispatch({
        type: ActionType.LODING_MEDICINE,
        payload: status
    })
}
export const errorMedicine = (error) => (dispatch) => {
    dispatch({
        type: ActionType.ERROR_MEDICINE,
        payload: error
    })
}

export const deleteMedicine = (id) => (dispatch) => {
    return fetch(baseUrl + 'medicine/' + id, {
        method: "delete",
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ' : ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dispatch({ type: ActionType.DELETE_MEDICINE, payload: id }))
        .catch(error => errorMedicine(error));
}
export const addMedicine = (data) => (dispatch) => {
    return fetch(baseUrl + 'medicine/', {
        method: "post",
        body: JSON.stringify(data),
        headers: {'Content-type':'application/JSON'}
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ' : ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dispatch({ type: ActionType.ADD_MEDICINE, payload: data }))
        .catch(error => errorMedicine(error));
}
export const editmedicine = (data) => (dispatch) => {
    return fetch(baseUrl + 'medicine/' + data.id, {
        method: "put",
        body: JSON.stringify(data),
        headers: {'Content-type':'application/JSON'}
    })
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ' : ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dispatch({ type: ActionType.EDIT_MEDICINE, payload: data }))
        .catch(error => errorMedicine(error));
}