export const LOGIN_TRIES = "LOGIN_TRIES"
export const LOGIN_SUCCESS = "LOGIN_SUCCESS"
export const LOGIN_FAIL = "LOGIN_FAIL"
export const LOGOUT = "LOGOUT"

export interface UserState {
    uid: string
    pass: string
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
    pass: null,
    jwt: null,
    isFetch: false,
    message: null
}

// Reducer
export default function UserReducer(state=initialState, action: UserAction): UserState {
    console.log(action.type);
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
    login: (uid: string, pass: string) => void
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

export function login(uid: string, jwt: string){
    return {
        type: LOGIN_SUCCESS,
        payload: {
            uid,
            jwt,
        }
    }
}

export function logout(){
    return {
        type: LOGOUT
    }
}