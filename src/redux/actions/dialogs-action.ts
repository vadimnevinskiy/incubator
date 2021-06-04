import {SET_DIALOGS, SET_MESSAGES} from "../vars";
import {DialogActionType, DialogType, MessagesActionType, MessagesType} from "../../types/types";


export const setDialogs = (dialogs: Array<DialogType>): DialogActionType => {
    return {
        type: SET_DIALOGS,
        dialogs: dialogs
    }
}

export const setMessages = (messages: Array<MessagesType>): MessagesActionType => {
    return {
        type: SET_MESSAGES,
        messages: messages
    }
}
