import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ActionType} from "../../../redux/state";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";

type postsProps = {
    posts: Array<ArrayData>
    newPostText: string
    dispatch: (action: ActionType) => void
}

type ArrayData = {
    id: number
    messagesPost: string
    likeCount: number
}

export const MyPosts: React.FC<postsProps> = (props) => {

    let postsElements = props.posts.map(p => <Post message={p.messagesPost} likeCount={p.likeCount}/>)

    let newPastElement = React.createRef<HTMLTextAreaElement>()

    let addPost = () => {
        props.dispatch(addPostAC())
    }

    let onPostChange = () => {
        let newText: string = newPastElement.current?.value as string
        //props.updateNewPostText(textPost as string)
        props.dispatch(updateNewPostTextAC(newText))
    }

    return (
        <section className={s.posts_wrap}>
            <h2>My Posts</h2>
            <div className={s.postsNew}>
                <div>
                    <textarea onChange={onPostChange} ref={newPastElement} value={props.newPostText}/>
                </div>
                <button onClick={addPost}>Add post</button>
            </div>

            {postsElements}

        </section>
    )
}