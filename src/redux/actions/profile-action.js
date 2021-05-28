import {SET_AUTH_ID, SET_PROFILE} from "../vars";

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile: profile
    }
}


