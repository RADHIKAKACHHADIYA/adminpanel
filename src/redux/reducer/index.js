import { combineReducers } from "redux";
import doctorReducer from "./doctor.reducer";
import medicineReducer from "./medicine.reducer";
import {patientsReducer} from "./patient.reducer";

const rootReducer = combineReducers ({
    medicine : medicineReducer,
    doctors: doctorReducer,
    patients: patientsReducer
})
export default rootReducer;