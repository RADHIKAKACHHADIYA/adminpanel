import * as ActionTypes from '../ActionType';

const initialValue = {
    login: [],
    errorMsg: '',
    isLoading: false
}

export const authReducer = (state = initialValue, action) => {
    // console.log(action)

    switch (action.type) {
        case ActionTypes.FATCH_USERLOGIN:
            return {
                ...state,
                login: state.login.concat(action.payload),
                errorMsg: '',
                isLoading: false
            }
        case ActionTypes.DELETE_USERLOGIN:
            return {
                ...state,
                Loign: state.login.filter((l) => l.id !== action.payload),
                errorMsg: '',
                isLoading: false
            }
        case ActionTypes.EDIT_USERLOGIN:
            return {
                ...state,
                usreLogin: state.login.map((e) => {
                    if (e.id === action.payload) {
                        return action.payload
                    } else {
                        return e
                    }
                }),
                errormsg: '',
                isLoding: false
            }
        default:
            return state;
    }
}