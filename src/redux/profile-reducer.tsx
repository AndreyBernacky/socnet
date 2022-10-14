import {ActionType} from "./redux-store";

type AddPostActionType = ReturnType<typeof addPostAC>

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type profileActionType = AddPostActionType | UpdateNewPostTextActionType

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
    newPostText: "Enter new post text"
}

export type initialStateType = typeof initialState

const profileReducer = (state: initialStateType = initialState, action: ActionType):initialStateType => {

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

export default profileReducer
