import API from "../API";

export const LOGIN_TRIES = "LOGIN_TRIES"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGOUT = "LOGOUT"

export interface UserState {
    uid: string
    username: string
    jwt: string
    isFetch: boolean
    message: string
}

interface LoginAction_TRIES {
    type: typeof LOGIN_TRIES
}

interface LoginAction_SUCCESS {
    type: typeof LOGIN_SUCCESS
    payload: UserState
}

interface LoginAction_FAIL {
    type: typeof LOGIN_FAIL
    message: string
}

interface LogoutAction {
    type: typeof LOGOUT
}
type UserAction = LoginAction_TRIES | LoginAction_SUCCESS | LoginAction_FAIL | LogoutAction

const initialState: UserState = {
    uid: null,
    username: null,
    jwt: null,
    isFetch: false,
    message: null
}

// Reducer
export default function UserReducer(state=initialState, action: UserAction): UserState {
    switch (action.type) {
        case LOGIN_TRIES:
            return {
                ...state,
                isFetch: true,
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                uid: action.payload.uid,
                jwt: action.payload.jwt,
                username: action.payload.username,
                isFetch: false,
            }
        case LOGIN_FAIL:
            return {
                ...state,
                message: action.message,
                isFetch: false,

            }
        case LOGOUT:
            return initialState
        default:
            return state
    }
}

// Action
export interface UserActions {
    login: (uid: string, pass:string) => void
    logout: () => void
}

export function fetch() {
    return {
        type: LOGIN_TRIES,
    }
}

export function fail(message: string) {
    return {
        type: LOGIN_FAIL,
        message: message,
    }
}

export function login(uid: string, username: string, jwt: string){
    return {
        type: LOGIN_SUCCESS,
        payload: {
            uid,
            username,
            jwt,
        }
    }
}

export function logout(){
    return {
        type: LOGOUT
    }
}

export function login_local(uid: string, pass:string) {
    return (dispatch, getState) => {
        const api = new API();
        dispatch(fetch())

        api.login(uid, pass).then( (res) => {
            dispatch(getUserData(res.data.key));
        }).catch( (error) => {
            dispatch(fail(error.response.data.non_field_errors));
        })
        
    }
}

function getUserData(key: string) {
    return (dispatch, getState) => {
        const api = new API(key);
        api.getUserDate().then( (res) => {
            dispatch(login(res.data.email, res.data.username, key));
        }).catch( (error) => {
            dispatch(fail(error.response.data.detail));
        });
    }
}