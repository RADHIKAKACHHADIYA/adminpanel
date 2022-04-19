import * as ActionType from '../ActionType'

export const  fetchUser = () => (dispatch) => {
    dispatch({type : ActionType.FATCH_USER})
}

export const RetriedUser = (data) => (dispatch) => {
    dispatch({ type: ActionType.RETRIEVED_USER, payload: data})
}
export const deleteUser = (id) => (dispatch) => {
    dispatch({type : ActionType.DELETE_USER, payload: id})
}

export const deletedUser = (data) => (dispatch) => {
    dispatch({ type: ActionType.DELETED_USER , payload: data })
}
