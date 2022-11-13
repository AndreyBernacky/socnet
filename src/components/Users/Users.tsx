import React from "react";
import {usersPropsType} from "./UsersContainer";
import style from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/img/userdefault.png"

class Users extends React.Component<usersPropsType, any> {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChange = (pageNumber:number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUser(response.data.items)
            })
    }

    render = () => {

        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={style.userWrap}>
                <ul className={style.userPager}>
                    {
                        pages.map(p => {
                            return <li key={p}
                                       className={this.props.currentPage === p ? style.userCurrentPage : ''}
                            onClick={() => this.onPageChange(p)}>{p}</li>
                        })
                    }
                </ul>
                {
                    this.props.users.map(u => <div key={u.id} className={style.userItem}>
                            <div className={style.userLeft}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} width='100'/>
                                {u.followed
                                    ? <button onClick={() => {
                                        this.props.unfollow(u.id)
                                    }}>unfollow</button>
                                    : <button onClick={() => {
                                        this.props.follow(u.id)
                                    }}>follow</button>
                                }
                            </div>
                            <div className={style.userRight}>
                                <div>
                                    <p className={style.userName}>{u.name}</p>
                                    <p className={style.userStatus}>{u.status}</p>
                                </div>
                                <div>
                                    <p className={style.userCountry}>{"u.location.country"}</p>
                                    <p className={style.userCity}>{"u.location.city"}</p>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }
}

export default Users;