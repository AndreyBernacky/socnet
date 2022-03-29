import {ActionType, ProfilePageType, StoreType} from "./state";

type AddPostActionType = ReturnType<typeof addPostAC>

type UpdateNewPostTextActionType = ReturnType<typeof updateNewPostTextAC>

export type profileActionType =
    AddPostActionType
    | UpdateNewPostTextActionType

const profileReducer = (state:ProfilePageType, action:ActionType) => {

    switch (action.type) {
        case "ADD-POST":
            const newPost = {
                id: 5,
                messagesPost: state.newPostText,
                likeCount: 0
            }
            state.posts.push(newPost)
            state.newPostText = ''

            return state
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            return state

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
