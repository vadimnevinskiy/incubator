import {FETCHING_TOGGLE, SET_AUTH_ID} from "../vars";

export const setToggleFetching = (fetching) => {
    return {
        type: FETCHING_TOGGLE,
        fetching: fetching
    }
}
export const setAuthId = (authId) => {
    return {
        type: SET_AUTH_ID,
        authId: authId
    }
}
