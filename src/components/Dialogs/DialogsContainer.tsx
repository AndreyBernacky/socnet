import React from "react";
import {AppStateType} from "../../redux/redux-store";
import {addMessageAC, DialogType, MessagesType, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStatePropsType = {
    dialogs: Array<DialogType>,
    messages: Array<MessagesType>,
    newMessageText: string,
    isAuth:boolean
}

type mapDispatchPropsType = {
    updateNewMessageText: (newMessage: string) => void,
    addMessage: () => void
}

export type DialogsPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth: state.authUser.isAuth
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        updateNewMessageText: (newMessage: string) => {
            dispatch(updateNewMessageAC(newMessage))

        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
