import {FETCHING_TOGGLE, SET_AUTH_ID} from "../vars";
import {AuthIdActionType, ToggleFetchingActionType} from "../actions/general-actions";

export type InitialStateType ={
    fetching: boolean,
    authId: number | null
}

const initialState: InitialStateType = {
    fetching: false,
    authId: null
}
const generalReducer = (state: InitialStateType = initialState, action: ToggleFetchingActionType | AuthIdActionType): InitialStateType => {
    switch (action.type) {
        case FETCHING_TOGGLE:
            return {
                ...state,
                fetching: action.fetching
            }
        case SET_AUTH_ID:
            return {
                ...state,
                authId: action.authId
            }
        default:
            return state;
    }
}

export default generalReducer;
