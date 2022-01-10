import React from "react";
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom'
import {FriendsSideBlock} from "./FriendsSideBlock/FriendsSideBlock";
import state from "../../redux/state";

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

export const Navbar = (props:stateFriends) => {
    return(
        <nav className={s.nav}>
            <ul className={s.navMenu}>
                <li><NavLink to={'/profile'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>Profile</NavLink></li>
                <li><NavLink to={'/dialogs'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>Messages</NavLink></li>'
                <li><NavLink to={'/News'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>News</NavLink></li>
                <li><NavLink to={'/Music'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>Music</NavLink></li>
                <li><NavLink to={'/Settings'} className={({isActive}) => `${isActive ? s.navMenuActive : ''}`}>Settings</NavLink></li>
            </ul>

            <FriendsSideBlock state={props.state} />
        </nav>
    )
}