import {FETCHING_TOGGLE, SET_AUTH_ID} from "../vars";

type SetToggleFetchingType = {
    type: typeof FETCHING_TOGGLE
    fetching: boolean
}

type SetAuthIdType = {
    type: typeof SET_AUTH_ID
    authId: number
}

export const setToggleFetching = (fetching: boolean): SetToggleFetchingType => {
    return {
        type: FETCHING_TOGGLE,
        fetching: fetching
    }
}
export const setAuthId = (authId: number): SetAuthIdType => {
    return {
        type: SET_AUTH_ID,
        authId: authId
    }
}
