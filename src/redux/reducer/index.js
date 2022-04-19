import { combineReducers } from "redux";
import doctorReducer from "./doctor.reducer";
import { authReducer } from "./login.reducer";
import medicineReducer from "./medicine.reducer";
import {patientsReducer} from "./patient.reducer";
import { userReducer } from "./user.reducer";

const rootReducer = combineReducers ({
    medicine : medicineReducer,
    doctors: doctorReducer,
    patients: patientsReducer,
    user: userReducer,
    login: authReducer
})
export default rootReducer;