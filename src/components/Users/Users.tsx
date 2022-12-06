import React from "react";
import style from "./Users.module.css";
import userPhoto from "../../assets/img/userdefault.png";
import {toggleIsFollowing, UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type userShowPropsType = {
    users: Array<UserType>
    pageSize: number,
    totalUsersCount: number,
    currentPage: number,
    onPageChange: (p: number) => void,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    isFollowingProgress: Array<number>,
}

export const Users = (props: userShowPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

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
                                   className={props.currentPage === p ? style.userCurrentPage : ''}
                                   onClick={() => props.onPageChange(p)}>{p}</li>
                    })
                }
            </ul>
            {
                props.users.map(u => <div key={u.id} className={style.userItem}>
                        <div className={style.userLeft}>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} width='100'/>
                            </NavLink>
                            {u.followed
                                ? <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button disabled={props.isFollowingProgress.some(id => id === u.id)} onClick={() => {
                                    props.follow(u.id)
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