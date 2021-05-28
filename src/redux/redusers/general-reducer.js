import {FETCHING_TOGGLE, SET_AUTH_ID} from "../vars";

const initialState = {
    fetching: false,
    authId: null
}
const generalReducer = (state = initialState, action) => {
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
