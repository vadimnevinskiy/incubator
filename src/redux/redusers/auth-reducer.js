import {SET_USER_DATA} from "../vars";

const initializeState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captcha: null
}

const authReducer = (state = initializeState, action) => {
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
