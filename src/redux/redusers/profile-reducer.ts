import {SET_PROFILE, SET_STATUS} from "../vars";
import {ProfileActionType, ProfileStateType, StatusActionType} from "../../types/types";




const initialState: ProfileStateType = {
    profile: null,
    status: ''
}

const profileReducer = (state: ProfileStateType = initialState, action: ProfileActionType | StatusActionType): ProfileStateType => {
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
