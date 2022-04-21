import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {ActionType} from "../../redux/redux-store";

type stateProps = {
    state: {
        posts: Array<ArrayData>
        newPostText:string
    }
    dispatch: (action: ActionType) => void
}


type ArrayData = {
    id: number
    messagesPost: string
    likeCount: number
}

export const Profile:React.FC<stateProps> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.state.posts}
                     dispatch={props.dispatch}
                     newPostText={props.state.newPostText}
            />
        </div>
    )
}