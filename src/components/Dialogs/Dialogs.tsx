import s from './Dialog.module.css';
import React, {ChangeEvent} from "react";
import {Dialoditem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";

type stateProps = {
    updateNewMessageText: (nm: string) => void
    addMessage: () => void
    state: {
         dialogs: Array<ArrayDialog>
         messages: Array<ArrayMessages>
         newMessageText: string
     }
}
type ArrayDialog = {
    id: number
    name: string
    src: string
}
type ArrayMessages = {
    id: number
    authorid: number
    message: string
}

export const Dialogs: React.FC<stateProps> = (props) => {

    let dialogElements = props.state.dialogs.map(m => <Dialoditem name={m.name} id={m.id} src={m.src}/>)

    const authorCommets = props.state.messages[0].authorid

    let messagesElements = props.state.messages.map(m => m.authorid === authorCommets ? <Message message={m.message}/> :
        <Message message={m.message} authorid={m.authorid}/>)

    let addMessage = () => {
        props.addMessage()
    }

    let onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let newMessage: string = e.currentTarget.value as string
        props.updateNewMessageText(newMessage as string)
    }

    return (
        <div className={s.dialogsWrap}>
            <div className={s.dialogs}>
                <h1>Dialogs</h1>
                {dialogElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div className={s.addMessageWrap}>
                    <textarea
                        onChange={onMessageChange}
                        value={props.state.newMessageText}
                        placeholder={'Enter New Message Text'}/>
                    <button onClick={addMessage}>Send</button>
                </div>
            </div>
        </div>
    )
}