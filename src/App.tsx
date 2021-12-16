import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Navbar} from "./components/Sidebar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import { News } from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";


function App() {
    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar/>
                <div className={'app-wrapper-cont'}>
                    <Routes>
                        <Route path={'/Dialogs'} element={<Dialogs />}/>
                        <Route path={'/Profile'} element={<Profile />}/>
                        <Route path={'/News'} element={<News />}/>
                        <Route path={'/Music'} element={<Music />}/>
                        <Route path={'/Settings'} element={<Settings />}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
