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
import {ActionType, StoreType} from "./redux/redux-store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type stateProps = {
    store:StoreType
    dispatch: (action: ActionType) => void
}

const App:React.FC<stateProps> = (props) => {

    const state = props.store.getState()

    return (
        <BrowserRouter>
            <div className={'app-wrapper'}>
                <Header/>
                <Navbar state={state.sidebar}/>
                <div className={'app-wrapper-cont'}>
                    <Routes>
                        <Route path={'/Dialogs'} element={<DialogsContainer
                            store={props.store}
                        />}/>
                        <Route path={'/Profile'} element={<Profile
                            store={props.store}
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
