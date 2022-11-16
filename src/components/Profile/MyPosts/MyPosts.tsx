import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {ProfilePropsType} from "./MyPostsContainer";

export const MyPosts: React.FC<ProfilePropsType> = (props) => {

    let postsElements = props.posts.map(p => <Post key={p.id} message={p.messagesPost} likeCount={p.likeCount}/>)

    let newPastElement = React.createRef<HTMLTextAreaElement>()

    let onAddPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let newText: string = newPastElement.current?.value as string
        props.updateNewPostText(newText as string)
    }

    return (
        <section className={s.posts_wrap}>
            <h2>My Posts</h2>
            <div className={s.postsNew}>
                <div>
                    <textarea onChange={onPostChange} ref={newPastElement} value={props.newPostText}/>
                </div>
                <button onClick={onAddPost}>Add post</button>
            </div>

            {postsElements}

        </section>
    )
}