import React from "react";
import {AppStateType} from "../../../redux/redux-store";
import {addPostAC, initialStateType, PostsType, updateNewPostTextAC} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStatePropsType = {
    posts:Array<PostsType>,
    newPostText:string
}

type mapDispatchPropsType = {
    updateNewPostText: (newText:string) => void,
    addPost: () => void
}

export type ProfilePropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state:AppStateType):mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch:Dispatch) => {
    return {
        updateNewPostText: (newText:string) => {
            dispatch(updateNewPostTextAC(newText))
        },
        addPost: () => {
            dispatch(addPostAC())
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
