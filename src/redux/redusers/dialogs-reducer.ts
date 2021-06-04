import {SET_DIALOGS, SET_MESSAGES} from "../vars";
import {DialogActionType, DialogsStateType, MessagesActionType} from "../../types/types";



const initialState: DialogsStateType = {
    dialogs: [],
    messages: []
}

const dialogsReducer = (state: DialogsStateType = initialState, action: DialogActionType | MessagesActionType): DialogsStateType => {
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
