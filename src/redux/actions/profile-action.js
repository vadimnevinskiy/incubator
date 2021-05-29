import {SET_AUTH_ID, SET_PROFILE, SET_STATUS} from "../vars";

export const setProfile = (profile) => {
    return {
        type: SET_PROFILE,
        profile: profile
    }
}

export const setStatus = (status) => {
    return {
        type: SET_STATUS,
        status: status
    }
}
