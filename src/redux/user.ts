export const LOGIN = "LOGIN"
export const LOGOUT = "LOGOUT"

export interface UserState {
    uid: string
    jwt: string
}

interface LoginAction {
    type: typeof LOGIN
    payload: UserState
}
interface LogoutAction {
    type: typeof LOGOUT
}
type UserAction = LoginAction | LogoutAction

const initialState: UserState = {
    uid: null,
    jwt: null,
}

// Reducer
export default function UserReducer(state=initialState, action: UserAction): UserState {
    switch (action.type) {
        case LOGIN:
            return {
                uid: action.payload.uid,
                jwt: action.payload.jwt
            }
        case LOGOUT:
            return initialState
        default: {
            return state
        }
    }
}

// Action
export function login(payload: UserState){
    return {
        type: LOGIN,
        payload
    }
}

export function logout(){
    return {
        type: LOGOUT
    }
}