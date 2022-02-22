import { combineReducers } from "redux";
import medicineReducer from "./medicine.reducer";

const rootReducer = combineReducers ({
    medicine : medicineReducer
})
export default rootReducer;