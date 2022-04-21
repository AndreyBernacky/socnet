import {ActionType, SidebarType} from "./store";

let initioalState = {
    friends: [
        {id: 1, name: 'Andrey', src: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg'},
        {id: 2, name: 'Sveta', src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
        {id: 3, name: 'Sergey', src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'},
        {id: 4, name: 'Volodia', src: 'https://vraki.net/sites/default/files/inline/images/1_396.jpg'}
    ]
}

const sidebarReducer = (state:SidebarType = initioalState, action:ActionType) => {

    return state
}

export default sidebarReducer