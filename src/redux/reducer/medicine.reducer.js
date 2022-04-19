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
                isLoding : action.payload
            }
        case ActionType.FATCH_MEDICINE :
            return {
                ...state,
                medicine : action.payload,
                errormsg : '',
                isLoding : false
            }
        case ActionType.ERROR_MEDICINE :
            return {
                ...state, 
                medicine : [],
                errormsg : action.payload,
                isLoding : false
            }
        case ActionType.DELETE_MEDICINE :
            return {
                ...state,
                medicine : state.medicine.filter((l) => l.id !== action.payload),
                errormsg : '',
                isLoding : false
            }
        case ActionType.ADD_MEDICINE :
            return{
                ...state,
                medicine : state.medicine.concat(action.payload),
                errormsg : '',
                isLoding : false
            }
        case ActionType.EDIT_MEDICINE :
            return {
                ...state,
                madicine : state.medicine.map((e) => {
                    if(e.id === action.payload.id) {
                        return action.payload
                    } else {
                        return e
                    }
                }),
                errormsg : '',
                isLoding : false
            }
        default: 
            return state;
    }
}

export default medicineReducer;