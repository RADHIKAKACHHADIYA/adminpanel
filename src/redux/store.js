import { applyMiddleware, createStore } from "redux";
import rootReducer from "./reducer";
import thunk from 'redux-thunk';


const configureStore = () => {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    )
    return store;
}

export default configureStore;