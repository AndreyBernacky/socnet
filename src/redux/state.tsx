import {rerenderEntireTree} from "../render";

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
type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
}
type DialogsPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessagesType>
    newMessageText: string
}
type SidebarType = {
    friends: Array<FriendsType>
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sidebar: SidebarType
}

let state: RootStateType = {
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
        newMessageText: "Enter New Message Text"
    },
    sidebar: {
        friends: [
            {id: 1, name: 'Andrey', src: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg'},
            {id: 2, name: 'Sveta', src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
            {id: 3, name: 'Sergey', src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
            {id: 4, name: 'Volodia', src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'}
        ]
    }
}

export let addPost = () => {
    const newPost = {
        id: 5,
        messagesPost: state.profilePage.newPostText,
        likeCount: 0
    }
    state.profilePage.posts.push(newPost)
    state.profilePage.newPostText = ''
    rerenderEntireTree(state)
}

export let updateNewPostText = (newText: string) => {
    state.profilePage.newPostText = newText
    rerenderEntireTree(state)
}

export let addMessage = () => {
    const newMessage = {
        id: 6,
        authorid: 3,
        message: state.dialogsPage.newMessageText
    }
    state.dialogsPage.messages.push(newMessage)
    state.dialogsPage.newMessageText = ''
    rerenderEntireTree(state)
}

export let updateNewMessageText = (newMessage: string) => {
    state.dialogsPage.newMessageText = newMessage
    rerenderEntireTree(state)
}

export default state
