import { combineReducers } from "redux";
import doctorReducer from "./doctor.reducer";
import medicineReducer from "./medicine.reducer";

const rootReducer = combineReducers ({
    medicine : medicineReducer,
    doctors: doctorReducer
})
export default rootReducer;