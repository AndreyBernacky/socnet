

type AddPostActionType = ReturnType<typeof addPostAC>

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

type setUserProfileActionType = ReturnType<typeof setUserProfile>

export type profileActionType = AddPostActionType | UpdateNewPostTextActionType | setUserProfileActionType

export type PostsType = {
    id: number
    messagesPost: string
    likeCount: number
}

let initialState = {
    posts: [
        {id: 1, messagesPost: "It\'s my first Post", likeCount: 230},
        {id: 2, messagesPost: "It\'is my Photo Post", likeCount: 23},
        {id: 3, messagesPost: "It\'s my Second Post", likeCount: 654}
    ] as Array<PostsType>,
    newPostText: "Enter new post text",
    profile: {} as profileType
}

export type profileType = {
    aboutMe: string,
    contacts: profileContactsTyoe,
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: profilePhotosType
}
type profileContactsTyoe = {
    facebook: string,
    website: string,
    vk: string,
    twitter: string,
    instagram: string,
    youtube: string,
    github: string,
    mainLink: string,
}
type profilePhotosType = {
    small: string,
    large: string
}

export type initialStateType = typeof initialState

const profileReducer = (state: initialStateType = initialState, action: profileActionType): initialStateType => {

    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: 5,
                messagesPost: state.newPostText,
                likeCount: 0
            }
            return {
                ...state,
                newPostText: '',
                posts: [...state.posts, newPost]
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        case "SET_USER_PROFILE":
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state
    }

}

export const addPostAC = () => {
    return {
        type: 'ADD-POST'
    } as const
}
export const updateNewPostTextAC = (newText: string) => {
    return {
        type: 'UPDATE-NEW-POST-TEXT',
        newText: newText
    } as const
}
export const setUserProfile = (profile: profileType) => {
    return {
        type: 'SET_USER_PROFILE', profile
    } as const
}

export default profileReducer
