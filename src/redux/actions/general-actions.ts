import {FETCHING_TOGGLE, SET_AUTH_ID} from "../vars";

export type ToggleFetchingActionType = {
    type: typeof FETCHING_TOGGLE
    fetching: boolean
}

export type AuthIdActionType = {
    type: typeof SET_AUTH_ID
    authId: number
}

export const setToggleFetching = (fetching: boolean): ToggleFetchingActionType => {
    return {
        type: FETCHING_TOGGLE,
        fetching: fetching
    }
}
export const setAuthId = (authId: number): AuthIdActionType => {
    return {
        type: SET_AUTH_ID,
        authId: authId
    }
}
