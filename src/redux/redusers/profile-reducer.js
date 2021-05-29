import {SET_AUTH_ID, SET_MY_AUTH_DATA, SET_PROFILE, SET_STATUS} from "../vars";

const initialState = {
    profile: null,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;
    }
}

export default profileReducer;
