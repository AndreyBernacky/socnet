import React from "react";
import {StoreType} from "../../../redux/redux-store";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import StoreContext from "../../../StoreContext";

type postsProps = {
    store: StoreType
}

export const MyPostsContainer: React.FC = () => {

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();


                let addPost = () => {

                    store.dispatch(addPostAC())
                }

                let onPostChange = (newText: string) => {

                    store.dispatch(updateNewPostTextAC(newText))
                }
                return <MyPosts
                    updateNewPostText={onPostChange}
                    addPost={addPost}
                    posts={state.profilePage.posts}
                    newPostText={state.profilePage.newPostText}/>
            }
            }
        </StoreContext.Consumer>
    )
}