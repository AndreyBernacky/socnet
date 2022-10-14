type followActionType = ReturnType<typeof followAC>
type unfollowActionType = ReturnType<typeof unfollowAC>
type setUsersActionType = ReturnType<typeof setUsersAC>

export type usersActionType = followActionType | unfollowActionType | setUsersActionType

export type UserType = {
    id: number,
    photo:string,
    followed: boolean,
    fullName: string,
    status: string,
    location: locationType
}

type locationType = {
    city: string,
    country: string
}

let initialState = {
    users: [] as Array<UserType>
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
                ...state, users: [...state.users, ...action.users]
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

export default usersReducer
