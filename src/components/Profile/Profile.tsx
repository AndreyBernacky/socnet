import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";

export const Profile = () => {
    return(
        <div className={s.contant}>
            <div className={s.mainimg}>
                <img src={''}/>
            </div>
            <div className={s.profile}>
                ava+description
            </div>
            <MyPosts />
        </div>
    )
}