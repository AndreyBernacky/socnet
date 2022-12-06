import React from "react";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {
    follow, getUser,
    setCurrentPage,
    toggleIsFollowing,
    unfollow,
    UserType
} from "../../redux/users-reducer";
import {Users} from "./Users";
import {Preloader} from "../common/Preloader/Preloader";

export type mapStatePropsType = {
    users: Array<UserType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    isFollowingProgress: Array<number>
}
export type mapDispatchPropsType = {
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void,
    toggleIsFollowing: (isFetching: boolean, userId: number) => void

    getUser: (currentPage: number, pageSize: number) => void
}

export type usersPropsType = mapStatePropsType & mapDispatchPropsType

class UsersWrapper extends React.Component<usersPropsType, any> {
    componentDidMount() {
        this.props.getUser(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        this.props.getUser(pageNumber, this.props.pageSize)
    }

    render = () => {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users
                users={this.props.users}
                pageSize={this.props.pageSize}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                onPageChange={this.onPageChange}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                isFollowingProgress={this.props.isFollowingProgress}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType): mapStatePropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        isFollowingProgress: state.userPage.isFollowingProgress
    }
}

export const UsersContainer = connect(mapStateToProps, {
    follow, unfollow, setCurrentPage, toggleIsFollowing, getUser
})(UsersWrapper)