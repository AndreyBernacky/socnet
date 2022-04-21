import {combineReducers, createStore} from "redux";
import profileReducer, {profileActionType} from "./profile-reducer";
import dialogsReducer, {dialogsActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

type MessagesType = {
    id: number
    authorid: number
    message: string
}
type DialogType = {
    id: number
    name: string
    src: string
}
type PostsType = {
    id: number
    messagesPost: string
    likeCount: number
}
type FriendsType = {
    id: number
    name: string
    src: string
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
export type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type SidebarType = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

export type StoreType = {
    //_state: RootStateType
    //_onChange: () => void

    getState: () => RootStateType
    subscribe: (callback: () => void) => void

    dispatch: (action: ActionType) => void
}

export type ActionType =
    profileActionType
    | dialogsActionType

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
});

let store = createStore(reducers);

export default store