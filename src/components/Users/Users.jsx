import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div className={styles.pagination}>
                {pages.map(page =>
                    <span
                        onClick={() => props.onPageChanged(page)}
                        className={page === props.currentPage && styles.selectedPage}>{page}</span>)}
            </div>
            {
                props.users.map(user => (
                    <div key={user.id}>
                        <div>
                            <div>
                                <NavLink to={`/profile/${user.id}`}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                         className={styles.userPhoto}/>
                                </NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {

                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                            {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "afd1319b-8e6a-48f7-a3ea-4097719e6880",
                                                },
                                            }, {})
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.unfollow(user.id)
                                                }
                                            })

                                    }}>Unfollow</button>
                                    : <button onClick={() => {

                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                            withCredentials: true,
                                            headers: {
                                                "API-KEY": "afd1319b-8e6a-48f7-a3ea-4097719e6880",
                                            },
                                        })
                                            .then(response => {
                                                if (response.data.resultCode === 0) {
                                                    props.follow(user.id)
                                                }
                                            })

                                    }}>Follow</button>}

                            </div>
                        </div>
                        <div>
                            <div>
                                <div>{user.name}</div>
                                <div>{user.status}</div>
                            </div>
                            <div>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.city"}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
};

export default Users;
