import {isNumber} from "util";

type followActionType = ReturnType<typeof followAC>
type unfollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>
type setCurrentActionType = ReturnType<typeof setCurrentPageAC>
type setTotalUsersCountActionType = ReturnType<typeof setTotalUsersCountAC>

export type usersActionType = followActionType
    | unfollowActionType
    | setUsersActionType
    | setCurrentActionType
    | setTotalUsersCountActionType

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
    currentPage:1
}

export type initialStateType = typeof initialState

const usersReducer = (state: initialStateType = initialState, action: usersActionType): initialStateType => {

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
                ...state, totalUsersCount: action.totalUsersCount/1000
            }
        }
        default:
            return state
    }

}

export const followAC = (userId: number) => {
    return {
        type: 'FOLLOW', userId
    } as const
}
export const unfollowAC = (userId: number) => {
    return {
        type: 'UNFOLLOW', userId
    } as const
}
export const setUsersAC = (users: Array<UserType>) => {
    return {
        type: 'SET_USERS', users
    } as const
}
export const setCurrentPageAC = (currentPage: number) => {
    return {
        type: 'SET_CURRENT_PAGE', currentPage
    } as const
}
export const setTotalUsersCountAC = (totalUsersCount: number) => {
    return {
        type: 'SET_TOTAL_USER_COUNT', totalUsersCount
    } as const
}

export default usersReducer
