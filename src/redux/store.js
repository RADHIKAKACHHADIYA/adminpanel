import { applyMiddleware, combineReducers } from "redux";
import rootReducer from "./reducer";
import thunk from 'redux-thunk';


const configareStore = () => {
    const store = combineReducers(
        rootReducer,
        applyMiddleware(thunk)
    )
    return store;
}

export default configareStore;