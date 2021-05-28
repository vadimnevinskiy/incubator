import {SET_AUTH_ID, SET_MY_AUTH_DATA, SET_PROFILE} from "../vars";

const initialState = {
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}

export default profileReducer;
