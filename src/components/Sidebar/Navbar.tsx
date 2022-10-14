import React from "react";
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
import {FriendsSideBlock} from "./FriendsSideBlock/FriendsSideBlock";
import {store} from "../../redux/redux-store";

type stateFriends = {
    state:{
        friends:Array<ArrayFriends>
    }
}
type ArrayFriends = {
    id: number
    name: string
    src: string
}

export const Navbar = () => {
    return(
        <nav className={s.nav}>
            <ul className={s.navMenu}>
                <li><NavLink to={'/profile'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>Profile</NavLink></li>
                <li><NavLink to={'/dialogs'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>Messages</NavLink></li>
                <li><NavLink to={'/News'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>News</NavLink></li>
                <li><NavLink to={'/Music'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>Music</NavLink></li>
                <li><NavLink to={'/Settings'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>Settings</NavLink></li>
                <li><NavLink to={'/Users'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>Users</NavLink></li>
            </ul>

            {/*<StoreContext.Consumer>*/}
            {/*    { (store) => <FriendsSideBlock state={store.getState().sidebar} />*/}
            {/*    }*/}
            {/*</StoreContext.Consumer>*/}
        </nav>
    )
}