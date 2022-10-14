import {combineReducers, createStore} from "redux";
import profileReducer, {profileActionType} from "./profile-reducer";
import dialogsReducer, {dialogsActionType} from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users-reducer";


export type ActionType =
    profileActionType
    | dialogsActionType

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    userPage:usersReducer
});

export type AppStateType = ReturnType<typeof rootReducer>

export const store = createStore(rootReducer);

