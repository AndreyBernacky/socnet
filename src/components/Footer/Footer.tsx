import React from "react";
import s from './Footer.module.css';

export const Footer = () => {
    return(
        <footer className={s.footer}>
            <img src={'./img/logo.png'} alt='socnet'/>
            <p>&copy; 2021 socnet</p>
        </footer>
    )

}