import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {setAuthUserData} from "../../redux/auth-reducer";
import {authAPI} from "../../api/api";

export type mapStatePropsType = {
    id: number,
    email: string,
    login: string,
    isAuth: boolean
}
export type mapDispatchPropsType = {
    setAuthUserData: (id: number, email: string, login: string) => void
}

export type authPropsType = mapStatePropsType & mapDispatchPropsType

class HeaderWrapper extends React.Component<authPropsType, any> {
    componentDidMount() {
            authAPI.getAuth().then(data => {
                if(data.resultCode === 0) {
                    let {id, email, login} = data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
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

export const HeaderContainer = connect(mapStateToProps, {setAuthUserData})(HeaderWrapper)