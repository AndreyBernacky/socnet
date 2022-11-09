import React from "react";
import {usersPropsType} from "./UsersContainer";
import style from "./Users.module.css";
import axios from "axios";
import userPhoto from "../../assets/img/userdefault.png"

export const Users: React.FC<usersPropsType> = (props) => {

    let getUsers = () => {
        if (props.users.length === 0) {
            axios.get("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    props.setUser(response.data.items)
                })
        }
    }

    return (
        <div className={style.userWrap}>
            <button onClick={getUsers}>get Users</button>
            {
                props.users.map(u => <div key={u.id} className={style.userItem}>
                        <div className={style.userLeft}>
                            <img src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} width='100'/>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollow(u.id)
                                }}>unfollow</button>
                                : <button onClick={() => {
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