import {SET_USER_DATA} from "../vars";

export const setAuthUserData = ({userId, email, login, isAuth}) => {
    return {
        type: SET_USER_DATA,
        payload: {
            userId,
            email,
            login,
            isAuth
        }
    }
}
