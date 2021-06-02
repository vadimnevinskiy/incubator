import {SET_DIALOGS, SET_MESSAGES} from "../vars";
import {DialogActionType, DialogType, MessagesActionType, MessagesType} from "../actions/dialogs-action";


export type InitialStateType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
}
const initialState: InitialStateType = {
    dialogs: [],
    messages: []
}

const dialogsReducer = (state: InitialStateType = initialState, action: DialogActionType | MessagesActionType): InitialStateType => {
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
