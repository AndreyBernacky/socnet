import React, {ComponentType, Props} from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getProfile, PostsType, profileType, setUserProfile} from "../../redux/profile-reducer";

import {Navigate, NavigateFunction, Params, useLocation, useNavigate, useParams,} from "react-router-dom";
import {profileAPI} from "../../api/api";


export type mapStatePropsType = {
    posts: Array<PostsType>,
    newPostText: string,
    profile: profileType,
    isAuth: boolean
}

export type mapDispatchPropsType = {
    getProfile: (userProfileId: string) => void
}

export type profilePropsType = mapStatePropsType & mapDispatchPropsType & {
    router: {
        params: { userId: string }
    }
}

// export type profilePropsType = mapStatePropsType & mapDispatchPropsType & { router: WithRouterType }


class ProfileContainer extends React.Component<profilePropsType, any> {
    componentDidMount() {
        let userProfileId = this.props.router.params.userId
        this.props.getProfile(userProfileId)
    }

    render() {
        if(!this.props.isAuth) return <Navigate replace to="/login" />
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        )
    }
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        isAuth: state.authUser.isAuth
    }
}

export function withRouter<T>(Component: React.ComponentType<T>) {
    function ComponentWithRouterProp(props: T) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component {...props} router={{location, navigate, params}}/>
        );
    }

    return ComponentWithRouterProp;
}

type WithRouterType = Location & NavigateFunction & Readonly<Params<string>>;

let containerProfileContainer = withRouter<any>(ProfileContainer)

export default connect<mapStatePropsType, mapDispatchPropsType, {}, AppStateType>(mapStateToProps, {getProfile})(containerProfileContainer);