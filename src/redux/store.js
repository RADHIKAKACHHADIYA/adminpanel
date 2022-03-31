import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from 'redux-saga';
import rootReducer from "./reducer";
import thunk from 'redux-thunk';
import rootSaga from "./sagas/rootsaga";


const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware()
    const middleware  = [sagaMiddleware , thunk]
    const store = createStore(
        rootReducer,
        applyMiddleware(...middleware)
    )
    sagaMiddleware.run(rootSaga)
    return store;
}

export default configureStore;