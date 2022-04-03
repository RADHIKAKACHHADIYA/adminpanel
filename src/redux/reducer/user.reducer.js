import * as ActionType from "../ActionType";

const initialValue = {
    user: [],
    errorMsg: '',
    isLoading: false
}

export const userReducer = (state = initialValue, action) => {
    switch (action.type) {
        case ActionType.RETRIEVED_USER:
            return {
                ...state,
                user: action.payload,
                errorMsg: '',
                isLoading: false
            }
        case ActionType.DELETED_USER:
            return {
                ...state,
                user: state.user.filter((l) => l.id !== action.payload),
                errorMsg: '',
                isLoading: false
            }
        default:
            return state;
    }
}
