type setAuthUserActionType = ReturnType<typeof setAuthUserData>

export type usersAuthActionType = setAuthUserActionType

type AuthDataType = {
    data: UserDataType,
    resultCode: number,
    messages: []
}

type UserDataType = {
    id: number,
    email: string,
    login: string
}

let initialState = {
    id: 0,
    email: '',
    login: '',
    isAuth:false
}


export type initialStateType = typeof initialState

const authReducer = (state: initialStateType = initialState, action: usersAuthActionType): initialStateType => {

    switch (action.type) {
        case "SET_AUTH_USER":
            return {
                ...state,
                id: action.userId,
                email: action.email,
                login: action.login,
                isAuth: true
            }
        default:
            return state
    }

}

export const setAuthUserData = (userId: number, email: string, login: string) => {
    return {
        type: 'SET_AUTH_USER', userId, email, login
    } as const
}

export default authReducer
