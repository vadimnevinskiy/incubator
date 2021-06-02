import {SET_USER_DATA} from "../vars";

export type AuthUserDataType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}

export type AuthUserDataActionType = {
    type: typeof SET_USER_DATA
    payload: AuthUserDataType
}

export const setAuthUserData = (payload: AuthUserDataType): AuthUserDataActionType => {
    return {
        type: SET_USER_DATA,
        payload: payload
    }
}
