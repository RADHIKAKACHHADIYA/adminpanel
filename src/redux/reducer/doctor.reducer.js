import * as ActionTypes from '../ActionType';

const initialValues = {
    doctors: [],
    errorMsg: '',
    isLoading: false
}

const doctorReducer = (state=initialValues, action) => {
    switch (action.type) {
        case ActionTypes.LOAD_DOCTORS:
            return {
                ...state,
                doctors: [],
                errorMsg: '',
                isLoading: action.payload
            }
        case ActionTypes.FETCH_DOCTORS:
            return {
                ...state,
                doctors: action.payload,
                errorMsg: '',
                isLoading: false
            }
        case ActionTypes.ERROR_DOCTORS:
            return {
                ...state,
                doctors: [],
                errorMsg:  action.payload,
                isLoading: false
            }
        case ActionTypes.ADD_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.concat(action.payload),
                errorMsg: '',
                isLoading: false
            }
        case ActionTypes.DELETE_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.filter((l) => l.id !== action.payload),
                errorMsg: '',
                isLoading: false
            }
        case ActionTypes.EDIT_DOCTORS:
            return {
                ...state,
                doctors: state.doctors.map((l) => {
                    if (l.id === action.payload.id) {
                        return action.payload
                    } else {
                        return l
                    }
                }),
                errorMsg: '',
                isLoading: false
            }

        default:
            return state;
    }
}

export default doctorReducer;