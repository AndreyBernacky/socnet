import React from "react";
import {StoreType} from "../../../redux/redux-store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";

type postsProps = {
    store: StoreType
}

export const MyPostsContainer: React.FC<postsProps> = (props) => {

    let state = props.store.getState();


    let addPost = () => {
        props.store.dispatch(addPostAC())
    }

    let onPostChange = (newText:string) => {
        props.store.dispatch(updateNewPostTextAC(newText))
    }

    return (
        <>
            <MyPosts
                updateNewPostText={onPostChange}
                addPost={addPost}
                posts={state.profilePage.posts}
                newPostText={state.profilePage.newPostText}/>
        </>
    )
}