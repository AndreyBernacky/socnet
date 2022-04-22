import React, {ChangeEvent} from "react";
import store, {StoreType} from "../../redux/redux-store";
import {addMessageAC, updateNewMessageAC} from "../../redux/dialogs-reducer";
import {Dialogs} from "./Dialogs";
import StoreContext from "../../StoreContext";

type stateProps = {
    store: StoreType
}

export const DialogsContainer: React.FC = () => {

    return (

        <StoreContext.Consumer>
            { (store) => {

                let state = store.getState().dialogsPage

                let addMessage = () => {

                    store.dispatch(addMessageAC())
                }

                let onMessageChange = (newMessage:string) => {

                    store.dispatch(updateNewMessageAC(newMessage))
                }
            return <Dialogs
                updateNewMessageText={onMessageChange}
                addMessage={addMessage}
                state={state}/>
            }
            }
        </StoreContext.Consumer>
    )
}