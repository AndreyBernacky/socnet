import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type stateProps = {
    store:StoreType
}

export const Profile:React.FC = () => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    )
}