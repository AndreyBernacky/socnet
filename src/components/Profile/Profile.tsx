import React from "react";
import s from './Profile.module.css'
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

type stateProps = {
    state: {
        posts: Array<ArrayData>
        newPostText:string
    }
    addPost: () => void
    updateNewPostText: (v:string) => void
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
                     addPost={props.addPost}
                     newPostText={props.state.newPostText}
                     updateNewPostText={props.updateNewPostText}
            />
        </div>
    )
}