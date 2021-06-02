import {SET_USER_DATA} from "../vars";

export type InitializeStateType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
    isFetching: boolean
    captcha?: string | null
}


const initializeState: InitializeStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null
}

const authReducer = (state: InitializeStateType = initializeState, action: any): InitializeStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


export default authReducer;
