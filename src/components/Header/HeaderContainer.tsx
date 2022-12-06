import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getAuth, setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

export type mapStatePropsType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}
export type mapDispatchPropsType = {
    getAuth: () => void
}

export type authPropsType = mapStatePropsType & mapDispatchPropsType

class HeaderWrapper extends React.Component<authPropsType, any> {
    componentDidMount() {
            this.props.getAuth()
    }

    render = () => {
        return <>
            <Header
                login={this.props.login}
                isAuth={this.props.isAuth}
            />
        </>
    }
}

let mapStateToProps = (state: AppStateType) => {
    return {
        id:state.authUser.id,
        email:state.authUser.email,
        login:state.authUser.login,
        isAuth: state.authUser.isAuth
    }
}

export const HeaderContainer = connect(mapStateToProps, {getAuth})(HeaderWrapper)