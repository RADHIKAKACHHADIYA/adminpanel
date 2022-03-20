import * as ActionType from "../ActionType";

const initialValue = {
    patients: [],
    errorMsg: '',
    isLoading: false
}

export const patientsReducer = (state = initialValue, action) => {

    switch (action.type) {
        case ActionType.RETRIEVED_PATIENTS:
            return {
                ...state,
                patients: action.payload,
                errorMsg: '',
                isLoading: false
            }
        default:
            return state;
    }
}