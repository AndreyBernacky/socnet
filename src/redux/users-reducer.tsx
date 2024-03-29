import {followAPI, usersAPI} from "../api/api";
import {Dispatch} from "redux";

type followSuccessActionType = ReturnType<typeof followSuccess>
type unfollowSuccessActionType = ReturnType<typeof unfollowSuccess>
type setUsersActionType = ReturnType<typeof setUsers>
type setCurrentActionType = ReturnType<typeof setCurrentPage>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCount>
type toggleIsFetchingActionType = ReturnType<typeof toggleIsFetching>
type toggleIsFollowingActionType = ReturnType<typeof toggleIsFollowing>

export type usersActionType = followSuccessActionType
    | unfollowSuccessActionType
    | setUsersActionType
    | setCurrentActionType
    | setTotalUsersCountActionType
    | toggleIsFetchingActionType
    | toggleIsFollowingActionType

export type UserType = {
    name: string,
    id: number,
    photos: photosType,
    followed: boolean,
    status: string,
    location: locationType
}

type photosType = {
    small: string,
    large: string
}
type locationType = {
    city: string,
    country: string
}

let initialState = {
    users: [] as Array<UserType>,
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: [] as Array<number>
}

export type initialStateType = typeof initialState

const usersReducer = (state: initialStateType = initialState, action: usersActionType): initialStateType => {
    debugger
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case "SET_USERS": {
            return {
                ...state, users: [...action.users]
            }
        }
        case "SET_CURRENT_PAGE": {
            return {
                ...state, currentPage: action.currentPage
            }
        }
        case "SET_TOTAL_USER_COUNT": {
            return {
                ...state, totalUsersCount: action.totalUsersCount / 1000
            }
        }
        case "TOGGLE_IS_FETCHING": {
            return {
                ...state, isFetching: action.isFetching
            }
        }
        case "TOGGLE_IS_FOLLOWING":
            return {
                ...state,
                isFollowingProgress: action.isFetching
                    ? [...state.isFollowingProgress, action.userId]
                    : state.isFollowingProgress.filter(id => id != action.userId)
            }

        default:
            return state
    }

}

export const followSuccess = (userId: number) => {
    return {
        type: 'FOLLOW', userId
    } as const
}
export const unfollowSuccess = (userId: number) => {
    return {
        type: 'UNFOLLOW', userId
    } as const
}
export const setUsers = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS', users
    } as const
}
export const setCurrentPage = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE', currentPage
    } as const
}
export const setTotalUsersCount = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USER_COUNT', totalUsersCount
    } as const
}
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: 'TOGGLE_IS_FETCHING', isFetching
    } as const
}
export const toggleIsFollowing = (isFetching: boolean, userId: number) => {
    return {
        type: 'TOGGLE_IS_FOLLOWING', isFetching, userId
    } as const
}

export const getUser = (currentPage: number, pageSize: number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFetching(true))
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(toggleIsFetching(false))
                dispatch(setUsers(data.items))
                dispatch(setTotalUsersCount(data.totalCount))
            })
    }
}
export const follow = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        followAPI.follow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId))
            })
    }
}
export const unfollow = (userId:number) => {
    return (dispatch: Dispatch) => {
        dispatch(toggleIsFollowing(true, userId))
        followAPI.unfollow(userId)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId))
                }
                dispatch(toggleIsFollowing(false, userId))
            })
    }
}

export default usersReducer
