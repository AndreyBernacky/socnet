import React, {ChangeEvent} from "react";
import {StoreType} from "../../redux/redux-store";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";

type stateProps = {
    store: StoreType
}

export const DialogsContainer: React.FC<stateProps> = (props) => {

    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(addMessageAC())
    }

    let onMessageChange = (newMessage:string) => {
        props.store.dispatch(updateNewMessageAC(newMessage))
    }

    return (
        <>
            <Dialogs
                updateNewMessageText={onMessageChange}
                addMessage={addMessage}
                state={state}/>
        </>
    )
}