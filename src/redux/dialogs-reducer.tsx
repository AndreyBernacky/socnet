import {ActionType} from "./redux-store";

type AddMessageActionType = ReturnType<typeof addMessageAC>

type UpdateNewMessageTextActionType = ReturnType<typeof updateNewMessageAC>

export type dialogsActionType =
    AddMessageActionType
    | UpdateNewMessageTextActionType

export type MessagesType = {
    id: number
    authorid: number
    message: string
}
export type DialogType = {
    id: number
    name: string
    src: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Alex", src: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg'},
        {id: 2, name: "Igor", src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
        {id: 3, name: "Andrey", src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
        {id: 4, name: "Viktor", src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
        {id: 5, name: "Dmitry", src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'}
    ] as Array<DialogType>,
    messages: [
        {id: 1, authorid: 2, message: "Hi"},
        {id: 2, authorid: 3, message: "What are you doing?"},
        {id: 3, authorid: 2, message: "I learn React"},
        {id: 4, authorid: 3, message: "Yo"},
        {id: 5, authorid: 2, message: "Yo"}
    ] as Array<MessagesType>,
    newMessageText: ""
}

export type initialStateType = typeof initialState

const dialogsReducer = (state:initialStateType = initialState, action:ActionType): initialStateType => {

    switch (action.type) {
        case "ADD-MESSAGE":
            const newMessage = {
                id: 6,
                authorid: 3,
                message: state.newMessageText
            }
            return {
                ...state,
                newMessageText: '',
                messages: [...state.messages, newMessage]
            }
        case "UPDATE-NEW-MESSAGE-TEXT":
            return {
                ...state,
                newMessageText: action.newMessage
            }
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