import React from "react";
import s from './Post.module.css'

type postPropsType = {
    message: string;
    likeCount:number
}
export const Post = (props: postPropsType) => {
    return (
        <article className={s.item}>
            <p>{props.message}</p>
            <p><span className={s.like}>{props.likeCount} Like</span></p>
        </article>
    )
}