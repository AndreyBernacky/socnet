import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {profilePropsType} from "./ProfileContainer";


export const Profile = (props:profilePropsType) => {
    return (
        <div>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer />
        </div>
    )
}