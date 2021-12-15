import React from "react";
import s from './Navbar.module.css';

export const Navbar = () => {
    return(
        <nav className={s.nav}>
            <ul className={s.navMenu}>
                <li><a href={'#c'}>Profile</a></li>
                <li><a href={'#c'}>Messages</a></li>
                <li><a href={'#c'}>News</a></li>
                <li><a href={'#c'}>Music</a></li>
                <li><a href={'#c'}>Settings</a></li>
            </ul>
        </nav>
    )
}