import {ActionType, DialogsPageType} from "./state";

type AddMessageActionType = ReturnType<typeof addMessageAC>

type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageAC>

export type dialogsActionType =
    AddMessageActionType
    | UpdateNewMessageTextActionType

const dialogsReducer = (state:DialogsPageType, action:ActionType) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id: 6,
                authorid: 3,
                message: state.newMessageText
            }
            state.messages.push(newMessage)
            state.newMessageText = ''

            return state
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newMessage
            return state
        default:
            return state
    }
}

export const addMessageAC = () => {
    return {
        type: 'ADD-MESSAGE'
    } as const
}

export const updateNewMessageAC = (newMessage:string) => {
    return {
        type: 'UPDATE-NEW-MESSAGE-TEXT',
        newMessage: newMessage
    } as const
}

export default dialogsReducer