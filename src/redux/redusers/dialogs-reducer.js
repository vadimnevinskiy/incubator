import {SET_DIALOGS, SET_MESSAGES} from "../vars";

const initialState = {
    dialogs: [],
    messages: []
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DIALOGS:
            return {
                ...state,
                dialogs: action.dialogs
            }
        case SET_MESSAGES:
            return {
                ...state,
                messages: action.messages
            }
        default:
            return state
    }
}

export default dialogsReducer;
