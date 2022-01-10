import React from 'react';
import './App.css';
import {Header} from "./components/Header/Header";
import {Footer} from "./components/Footer/Footer";
import {Navbar} from "./components/Sidebar/Navbar";
import {Profile} from "./components/Profile/Profile";
import {Dialogs} from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import {News} from './components/News/News';
import {Music} from "./components/Music/Music";
import {Settings} from "./components/Settings/Settings";
import {addMessage, RootStateType, updateNewMessageText, updateNewPostText} from "./redux/state";

type stateProps = {
    state: RootStateType
    addPost: () => void
    updateNewPostText: (v:string) => void
    addMessage: () => void
    updateNewMessageText: (v:string) => void
}

const App:React.FC<stateProps> = (props) => {

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={props.state.sidebar}/>
                <div className={'app-wrapper-cont'}>
                    <Routes>
                        <Route path={'/Dialogs'} element={<Dialogs
                            state={props.state.dialogsPage}
                            addMessage={addMessage}
                            updateNewMessageText={updateNewMessageText}
                        />}/>
                        <Route path={'/Profile'} element={<Profile
                            state={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}/>
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
