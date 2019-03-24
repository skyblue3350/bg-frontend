import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import persistState from "redux-localstorage";
import thunk from "redux-thunk";

import UserReducer, { UserState } from "./user";

export type ReduxState = {
    UserReducer: UserState
}

const slicer = () => (state: ReduxState) => {
    return {
        UserReducer: {
            uid: state.UserReducer.uid,
            username: state.UserReducer.username,
            jwt: state.UserReducer.jwt,
        }
    }
}

export default function configureStore() {
    const reducer = combineReducers({
        UserReducer,
    });
    const store = createStore(
        reducer,
        compose(
            applyMiddleware(thunk),
            persistState("", {
                key: "user",
                slicer,
            })
        )
    );
    return store;
}

