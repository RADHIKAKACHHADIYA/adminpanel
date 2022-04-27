import { combineReducers } from "redux";
import doctorReducer from "./doctor.reducer";
import { authReducer } from "./login.reducer";
import medicineReducer from "./medicine.reducer";
import {patientsReducer} from "./patient.reducer";
import { userReducer } from "./user.reducer";
import { imgauthReducer } from "./slider.reducer";

const rootReducer = combineReducers ({
    medicine : medicineReducer,
    doctors: doctorReducer,
    patients: patientsReducer,
    user: userReducer,
    login: authReducer, 
    slider : imgauthReducer
})
export default rootReducer;