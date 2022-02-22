import * as ActionType from "../ActionType";

const initialvalue ={
    medicine: [],
    errormsg : '',
    isLoding : false ,

}
const medicineReducer = (state=initialvalue , action) => {
    switch (action.type) {
        case ActionType.LODING_MEDICINE :
            return {
                ...state,
                medicine : [],
                errormsg : '',
                isLoding : false
            }
        case ActionType.FATCH_MEDICINE :
            return {
                ...state,
                medicine : action.type,
                errormsg : '',
                isLoding : false
            }
        case ActionType.ERROR_MEDICINE :
            return {
                ...state, 
                medicine : [],
                errormsg : action.type,
                isLoding : false
            }
        case ActionType.DELETE_MEDICINE :
            return {
                ...state,
                medicine : action.type.filter((l) => l.id !== action.payload.id),
                errormsg : '',
                isLoding : false
            }
        default: 
            return state;
    }
}

export default medicineReducer;