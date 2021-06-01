import {SET_DIALOGS, SET_MESSAGES} from "../vars";

export const setDialogs = (dialogs) => {
    return {
        type: SET_DIALOGS,
        dialogs: dialogs
    }
}

export const setMessages = (messages) => {
    return {
        type: SET_MESSAGES,
        messages: messages
    }
}
