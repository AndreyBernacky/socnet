import React from "react";
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderAuthPropsType = {
    login: string,
    isAuth: boolean
}

export const Header = (props: HeaderAuthPropsType) => {
    return (
        <header className={s.header}>
            <img src={'./img/logo.png'} alt='socnet_logo'/>
            <div className={s.loginblock}>
                <p>
                    {props.isAuth
                        ? props.login
                        : <NavLink to={'/login/'}>login</NavLink>}

                </p>
            </div>
        </header>
    )
}