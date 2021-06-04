import {FETCHING_TOGGLE, SET_AUTH_ID} from "../vars";
import {AuthIdActionType, ToggleFetchingActionType} from "../../types/types";



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
