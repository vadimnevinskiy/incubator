import {SET_DIALOGS, SET_MESSAGES} from "../vars";


export type DialogType = {
    id: number
    name: string
    messageCount: number
}
export type DialogActionType = {
    type: typeof SET_DIALOGS,
    dialogs: Array<DialogType>
}


export type MessagesType = {
    id: number
    message: string
}
export type MessagesActionType = {
    type: typeof SET_MESSAGES,
    messages: Array<MessagesType>
}



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
