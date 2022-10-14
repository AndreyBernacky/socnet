import React from "react";
import {connect} from "react-redux";
import {Users} from "./Users";
import {AppStateType} from "../../redux/redux-store";
import {followAC, setUsersAC, unfollowAC, UserType} from "../../redux/users-reducer";
import {Dispatch} from "redux";

export type mapStatePropsType = {
    users: Array<UserType>
}
export type mapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setUser: (users: Array<UserType>) => void
}

export type usersPropsType = mapStatePropsType & mapDispatchPropsType

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.userPage.users
    }
}

let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unfollowAC(userId))
        },
        setUser: (users: Array<UserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)