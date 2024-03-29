import React from 'react';
import './App.css';
import {Footer} from "./components/Footer/Footer";
import {Navbar} from "./components/Sidebar/Navbar";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";
import {Login} from "./components/Login/Login";


const App:React.FC = () => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <HeaderContainer />
                <Navbar />
                <div className={'app-wrapper-cont'}>
                    <Routes>
                        <Route path={'/Dialogs'} element={
                            <DialogsContainer/>}
                        />
                        <Route path={'/profile/:userId*'} element={
                            <ProfileContainer/>}/>
                        <Route path={'/profile/*'} element={
                            <ProfileContainer/>}/>
                        <Route path={'/Users'} element={
                            <UsersContainer/>}/>
                        <Route path={'/login'} element={<Login/>}/>
                        <Route path={'/News'} element={<News/>}/>
                        <Route path={'/Music'} element={<Music/>}/>
                        <Route path={'/Settings'} element={<Settings/>}/>
                    </Routes>
                </div>
                <Footer/>
            </div>
        </BrowserRouter>
    );
}

export default App;
