import { baseUrl } from '../../URL/baseUrl';
import * as ActionTypes from '../ActionTypes';

export const fetchDoctors = () => (dispatch) => {
    dispatch(loadDoctors(true))

    setTimeout(function () {
        return fetch(baseUrl + 'doctor')
        .then(response => {
            if (response.ok) {
                return response;
            } else {
                var error = new Error('Error ' + response.status + ': ' + response.statusText);
                error.response = response;
                throw error;
            }
        },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(doctors => dispatch({ type: ActionTypes.FETCH_DOCTORS, payload: doctors }))
        .catch(error => dispatch(errorDoctors(error)));
    }, 1000)
}

export const loadDoctors = (status) => (dispatch) => {
    dispatch({ type: ActionTypes.LOAD_DOCTORS, payload: status })
}

export const errorDoctors = (error) => (dispatch) => {
    dispatch({ type: ActionTypes.ERROR_DOCTORS, payload: error.message })
}

export const deleteDoctors = (id) => (dispatch) => {
    return fetch(baseUrl + 'doctor/' + id , {
        method: 'delete',
        // body: JSON.stringify(data),
        // headers: {
        //     "Content-Type": "application/json"
        // }
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(dispatch({ type: ActionTypes.DELETE_DOCTORS, payload: id }))
    .catch(error => dispatch(errorDoctors(error)));
}

export const addDoctors = (data) => (dispatch) => {
    return fetch(baseUrl + 'doctor', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(dispatch({ type: ActionTypes.ADD_DOCTORS, payload: data }))
    .catch(error => dispatch(errorDoctors(error)));
}



export const editDoctors = (data) => (dispatch) => {
    return fetch(baseUrl + 'doctor/' + data.id , {
        method: 'delete',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            var error = new Error('Error' + response.status + ':' + response.statusText);
            error.response = response;
            throw error;
        }
    },
        error => {
            var errmess = new Error(error.message);
            throw errmess;
        })
    .then(response => response.json())
    .then(dispatch({ type: ActionTypes.EDIT_DOCTORS, payload: data }))
    .catch(error => dispatch(errorDoctors(error)));
}