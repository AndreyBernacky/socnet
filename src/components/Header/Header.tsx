import React from "react";
import s from './Header.module.css'

export const Header = () => {
    return(
        <header className={s.header}>
            <img src={'./img/logo.png'} alt='socnet_logo'/>
        </header>
    )
}