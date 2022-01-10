import s from './../Dialog.module.css';
import {NavLink} from "react-router-dom";
import React from "react";

type DialoditemProps = {
    name: string
    id: number
    src:string
}

export const Dialoditem = (props: DialoditemProps) => {
    let path = '/dialogs/' + props.id

    return (
        <div className={s.dialogItem + ' ' + s.active}>
            <img src={props.src} width="50" />
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

