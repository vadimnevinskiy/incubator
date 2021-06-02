import {SET_AUTH_ID, SET_PROFILE, SET_STATUS} from "../vars";
import {ProfileType} from "../redusers/profile-reducer";
import exp from "constants";


export type ProfileActionType = {
    type: typeof SET_PROFILE,
    profile: ProfileType
}

export type StatusActionType = {
    type: typeof SET_STATUS,
    status: string
}

export const setProfile = (profile: any): ProfileActionType => {
    return {
        type: SET_PROFILE,
        profile: profile
    }
}

export const setStatus = (status: string): StatusActionType => {
    return {
        type: SET_STATUS,
        status: status
    }
}
