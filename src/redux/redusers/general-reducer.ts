import {FETCHING_TOGGLE, SET_AUTH_ID} from "../vars";

export type InitialStateType ={
    fetching: boolean,
    authId: number | null
}

const initialState: InitialStateType = {
    fetching: false,
    authId: null
}
const generalReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
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
