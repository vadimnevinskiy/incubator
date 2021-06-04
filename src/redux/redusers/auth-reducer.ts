import {SET_USER_DATA} from "../vars";
import {AuthStateType} from "../../types/types";


const initializeState: AuthStateType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null
}

const authReducer = (state: AuthStateType = initializeState, action: any): AuthStateType => {
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
