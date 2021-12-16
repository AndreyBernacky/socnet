import React from "react";
import s from './Navbar.module.css';

export const Navbar = () => {
    return(
        <nav className={s.nav}>
            <ul className={s.navMenu}>
                <li><a href={'/profile'}>Profile</a></li>
                <li><a href={'/dialogs'}>Messages</a></li>
                <li><a href={'/News'}>News</a></li>
                <li><a href={'/Music'}>Music</a></li>
                <li><a href={'/Settings'}>Settings</a></li>
            </ul>
        </nav>
    )
}