import {SET_USER_DATA} from "../vars";
import {AuthUserDataActionType, AuthUserDataType} from "../../types/types";



export const setAuthUserData = (payload: AuthUserDataType): AuthUserDataActionType => {
    return {
        type: SET_USER_DATA,
        payload: payload
    }
}
