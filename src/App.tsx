import React from 'react';
import './App.css';
import './img/logo.png';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Navbar} from "./components/Sidebar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialods} from "./components/Dialogs/Dialogs";
import s from "./components/Profile/Profile.module.css";


function App() {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-cont'}>
                <Dialods/>
                {/*<Profile/>*/}
            </div>
            <Footer/>
        </div>
    );
}

export default App;
