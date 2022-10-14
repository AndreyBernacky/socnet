import {profileActionType} from "./profile-reducer";
import {dialogsActionType} from "./dialogs-reducer";

export type ActionType = profileActionType | dialogsActionType
/*


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




/*

let store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, messagesPost: "It\'s my first Post", likeCount: 230},
                {id: 2, messagesPost: "It\'is my Photo Post", likeCount: 23},
                {id: 3, messagesPost: "It\'s my Second Post", likeCount: 654}
            ],
            newPostText: "Enter new post text"
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Alex", src: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg'},
                {id: 2, name: "Igor", src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
                {id: 3, name: "Andrey", src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
                {id: 4, name: "Viktor", src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
                {id: 5, name: "Dmitry", src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'}
            ],
            messages: [
                {id: 1, authorid: 2, message: "Hi"},
                {id: 2, authorid: 3, message: "What are you doing?"},
                {id: 3, authorid: 2, message: "I learn React"},
                {id: 4, authorid: 3, message: "Yo"},
                {id: 5, authorid: 2, message: "Yo"}
            ],
            newMessageText: ""
        },
        sidebar: {
            friends: [
                {id: 1, name: 'Andrey', src: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg'},
                {id: 2, name: 'Sveta', src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
                {id: 3, name: 'Sergey', src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
                {id: 4, name: 'Volodia', src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'}
            ]
        }
    },
    _onChange() {
        console.log('State Change')
    },

    subscribe(callback) {
        this._onChange = callback
    },
    getState() {
        return this._state
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._onChange()
    }
}
export default store

*/