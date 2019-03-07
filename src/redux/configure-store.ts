import { createStore, combineReducers } from "redux";
import UserReducer, { UserState } from "./user";

export type ReduxState = {
    UserReducer: UserState
}

export default function configureStore() {
    const reducer = combineReducers({
        UserReducer,
    });
    const store = createStore(reducer);
    return store;
}