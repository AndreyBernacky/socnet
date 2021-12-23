import React from "react";
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";

export const MyPosts = () => {
    return (
        <section className={s.posts_wrap}>
            <h2>My Posts</h2>
            <div className={s.postsNew}>
                <div>
                    <textarea></textarea>
                </div>
                <button>Add post</button>
                <button>Del post</button>
            </div>

            <Post message={'It\'s my first Post'} likeCount={230}/>
            <Post message={'It\'is my Photo Post'} likeCount={555}/>

        </section>
    )
}