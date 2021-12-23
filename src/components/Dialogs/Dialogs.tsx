import s from './Dialog.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

type DialoditemProps = {
    name: string
    id: number
}

const Dialoditem = (props: DialoditemProps) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialogItem + ' ' + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessageProps = {
    message:string
}

const Message = (props:MessageProps) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

export const Dialogs = () => {
    return (
        <div className={s.dialogsWrap}>
            <div className={s.dialogs}>
                <h1>Dialogs</h1>

                <Dialoditem name={"Alex"} id={1} />
                <Dialoditem name={"Igor"} id={2} />
                <Dialoditem name={"Andrey"} id={3} />
                <Dialoditem name={"Viktor"} id={4} />
                <Dialoditem name={"Dmitry"} id={5} />
            </div>
            <div className={s.messages}>
                <Message message={"Hi"} />
                <Message message={"What are you doing?"} />
                <Message message={"I learn React"} />
            </div>
        </div>
    )
}