import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import UserReducer, { UserState } from "./user";

export type ReduxState = {
    UserReducer: UserState
}

export default function configureStore() {
    const reducer = combineReducers({
        UserReducer,
    });
    const store = createStore(
        reducer,
        applyMiddleware(thunk)
    );
    return store;
}