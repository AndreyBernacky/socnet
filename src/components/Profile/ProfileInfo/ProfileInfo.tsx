import React from "react";
import {profileType} from "../../../redux/profile-reducer";
import {Preloader} from "../../common/Preloader/Preloader";

export const ProfileInfo = (props:{profile:profileType}) => {
    if(!props.profile){
        console.log("Entered in IF")
        return <Preloader/>
    }
    return (
        <div>
            <div>
                <img src={''}/>
            </div>
            <div>
                <img src={props.profile.photos?.large} />
                <p>{props.profile.fullName}</p>
                <p>{props.profile.aboutMe}</p>
                <p>{props.profile.lookingForAJob}</p>
                <p>{props.profile.lookingForAJobDescription}</p>

            </div>

        </div>
    )
}