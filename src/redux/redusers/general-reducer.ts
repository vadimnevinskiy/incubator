import {FETCHING_TOGGLE, SET_AUTH_ID} from "../vars";
import {AuthIdActionType, GeneralStateType, ToggleFetchingActionType} from "../../types/types";



const initialState: GeneralStateType = {
    fetching: false,
    authId: null
}
const generalReducer = (state: GeneralStateType = initialState, action: ToggleFetchingActionType | AuthIdActionType): GeneralStateType => {
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
