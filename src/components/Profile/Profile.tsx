import React from "react";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {StoreType} from "../../redux/redux-store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";

type stateProps = {
    store:StoreType
}

export const Profile:React.FC<stateProps> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer store={props.store}
            />
        </div>
    )
}