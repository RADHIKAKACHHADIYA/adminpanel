import * as ActionType from "../ActionType";
import { baseUrl } from '../../url/baseUrl';

export const fetchDoctors = () => (dispatch) => {

    // dispatch(loadDoctors(true))

    const axios = require('axios').default;

    //const axios = require('axios');

    const instance = axios.create ({
        baseURL : "http://localhost:3001/",
        timeout : 3000
    })

    console.log(instance)
    try {
        instance.request({
            url : 'doctor',
            method : 'get'
        })
        .then (function(response) {
            dispatch ({
                type : ActionType.FETCH_DOCTORS,
                payload : response.data
            })
            console.log(response)
        })
        .catch (function(error) {
            console.log(error);
        })
        .then (function() {

        });
    } catch (error) {
        console.log(error)
    }

    // setTimeout(function () {
    //     return fetch(baseUrl + 'doctor')
    //     .then(response => {
    //         if (response.ok) {
    //             return response;
    //         } else {
    //             var error = new Error('Error ' + response.status + ': ' + response.statusText);
    //             error.response = response;
    //             throw error;
    //         }
    //     },
    //         error => {
    //             var errmess = new Error(error.message);
    //             throw errmess;
    //         })
    //     .then(response => response.json())
    //     .then(doctors => dispatch({ type: ActionType.FETCH_DOCTORS, payload: doctors }))
    //     .catch(error => dispatch(errorDoctors(error)));
    // }, 1000)
}
export const loadDoctors = (status) => (dispatch) => {
    dispatch({ type: ActionType.LOAD_DOCTORS, payload: status })
}
export const errorDoctors = (error) => (dispatch) => {
    dispatch({ type: ActionType.ERROR_DOCTORS, payload: error.message })
}
export const deleteDoctors = (id) => (dispatch) => {


    const axios = require('axios').default;

    //const axios = require('axios');

    const instance = axios.create ({
        baseURL : "http://localhost:3001/",
        timeout : 3000
    })

    console.log(instance)
    try {
        instance.request({
            url : 'doctor/' + id,
            method : 'delete'
        })
        .then (function(response) {
            dispatch ({
                type : ActionType.DELETE_DOCTORS,
                payload : id
            })
            console.log(response)
        })
        .catch (function(error) {
            console.log(error);
        })
        .then (function() {

        });
    } catch (error) {
        console.log(error)
    }
    // return fetch(baseUrl + 'doctor/' + id , {
    //     method: 'delete',
    // })
    // .then(response => {
    //     if (response.ok) {
    //         return response;
    //     } else {
    //         var error = new Error('Error' + response.status + ':' + response.statusText);
    //         error.response = response;
    //         throw error;
    //     }
    // },
    //     error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //     })
    // .then(response => response.json())
    // .then(dispatch({ type: ActionType.DELETE_DOCTORS, payload: id }))
    // .catch(error => dispatch(errorDoctors(error)));
}

export const addDoctors = (data) => (dispatch) => {
    const axios = require('axios').default;

    //const axios = require('axios');

    const instance = axios.create ({
        baseURL : "http://localhost:3001/",
        timeout : 3000
    })

    console.log(instance)
    try {
        instance.request({
            url : 'doctor/' + data,
            method : 'post',
            data: {
                firstName: 'Fred',
                lastName: 'Flintstone'
              }
        })
        .then (function(response) {
            dispatch ({
                type : ActionType.DELETE_DOCTORS,
                payload : data
            })
            console.log(response)
        })
        .catch (function(error) {
            console.log(error);
        })
        .then (function() {

        });
    } catch (error) {
        console.log(error)
    }
    // return fetch(baseUrl + 'doctor', {
    //     method: 'post',
    //     body: JSON.stringify(data),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    // .then(response => {
    //     if (response.ok) {
    //         return response;
    //     } else {
    //         var error = new Error('Error' + response.status + ':' + response.statusText);
    //         error.response = response;
    //         throw error;
    //     }
    // },
    //     error => {
    //         var errmess = new Error(error.message);
    //         throw errmess;
    //     })
    // .then(response => response.json())
    // .then(dispatch({ type: ActionType.ADD_DOCTORS, payload: data }))
    // .catch(error => dispatch(errorDoctors(error)));
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
    .then(dispatch({ type: ActionType.EDIT_DOCTORS, payload: data }))
    .catch(error => dispatch(errorDoctors(error)));
}