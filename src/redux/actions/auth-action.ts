import {SET_USER_DATA} from "../vars";

export type PayloadType = {
    userId: number,
    email: string,
    login: string,
    isAuth: boolean
}

export type SetAuthUserDataType = {
    type: typeof SET_USER_DATA
    payload: PayloadType
}
export const setAuthUserData = (payload: PayloadType): SetAuthUserDataType => {
    return {
        type: SET_USER_DATA,
        payload: payload
    }
}
