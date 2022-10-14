import React from "react";
import {usersPropsType} from "./UsersContainer";
import style from "./Users.module.css";

export const Users: React.FC<usersPropsType> = (props) => {
    if (props.users.length === 0) {
        props.setUser([
            {
                id: 1,
                photo: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg',
                followed: false,
                fullName: 'Andrey',
                status: 'Big Boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photo: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg',
                followed: true,
                fullName: 'Dima',
                status: 'Big Boss',
                location: {city: 'Gomel', country: 'Belarus'}
            },
            {
                id: 3,
                photo: 'https://bipbap.ru/wp-content/uploads/2021/07/1525256972_15.jpg',
                followed: false,
                fullName: 'Ivan',
                status: 'Big Boss',
                location: {city: 'Grodno', country: 'Belarus'}
            }
        ])
    }

    return (
        <div className={style.userWrap}>
            {
                props.users.map(u => <div key={u.id} className={style.userItem}>
                        <div className={style.userLeft}>
                            <img src={u.photo} alt='namePhoto' width='100'/>
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
                                <p className={style.userName}>{u.fullName}</p>
                                <p className={style.userStatus}>{u.status}</p>
                            </div>
                            <div>
                                <p className={style.userCountry}>{u.location.country}</p>
                                <p className={style.userCity}>{u.location.city}</p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}