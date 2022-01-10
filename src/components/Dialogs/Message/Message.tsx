import s from './../Dialog.module.css';
import React from "react";

type MessageProps = {
    message:string
    authorid?:number
}

export const Message = (props:MessageProps) => {
    if(props.authorid){
    return (
        <div className={s.message+' '+s.authorcomments}>{props.message}</div>
    )} else {
        return (
            <div className={s.message}>{props.message}</div>
        )}
}