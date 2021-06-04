import {SET_PROFILE, SET_STATUS} from "../vars";
import {ProfileActionType, StatusActionType} from "../../types/types";




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
