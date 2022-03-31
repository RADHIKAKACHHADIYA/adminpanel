import * as ActionType from '../ActionType'

export const fatchPatient = () => (dispatch) => {
    dispatch({type:  ActionType.FATCH_PATIENT })
}

export const patientRetried = (data) => (dispatch) => {
dispatch({type:ActionType.RETRIEVED_PATIENTS , payload:data})
}
 
export const patientInsert = (data) => (dispatch) => {
    dispatch({type:ActionType.ADD_PATIENTS , payload:data})
}