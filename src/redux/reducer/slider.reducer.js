import * as ActionTypes from '../ActionType';

const initialValue = {
    slider: [],
    errorMsg: '',
    isLoading: false
}

export const imgauthReducer = (state = initialValue, action) => {

    switch (action.type) {
        case ActionTypes.FATCH_SLIDER:
            return {
                ...state,
                slider: action.payload,
                errorMsg: '',
                isLoading: false
            }
        case ActionTypes.ADD_SLIDER:
            return {
                ...state,
                slider: state.slider.concat(action.payload),
                errorMsg: '',
                isLoading: false
            }
        case ActionTypes.DELETE_SLIDER:
            return {
                ...state,
                slider: state.slider.filter((l) => l.id !== action.payload),
                errorMsg: '',
                isLoading: false
            }
        // case ActionTypes.UPDATE_SLIDER:
        //     return {
        //         ...state,
        //         slider: state.login.map((e) => {
        //             if (e.id === action.payload) {
        //                 return action.payload
        //             } else {
        //                 return e
        //             }
        //         }),
        //         errormsg: '',
        //         isLoding: false
        //     }
        default:
            return state;
    }
}