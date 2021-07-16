import React from 'react';
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {NavLink} from "react-router-dom";
import * as axios from "axios";
import {toggleFollowingProgress} from "../../redux/users-reducer";

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
                                    ? <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {

                                                  props.toggleFollowingProgress(true, user.id);
                                                  axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`,
                                                      {
                                                          withCredentials: true,
                                                          headers: {
                                                              "API-KEY": "91e93eb3-0fc5-4700-9864-e2ea5bdc5165",
                                                          },
                                                      }, {})
                                                      .then(response => {
                                                          if (response.data.resultCode === 0) {
                                                              props.unfollow(user.id)
                                                          }
                                                          props.toggleFollowingProgress(false, user.id);
                                                      })

                                              }}>Unfollow</button>
                                    : <button disabled={props.followingInProgress.some(id => id === user.id)}
                                              onClick={() => {

                                                  props.toggleFollowingProgress(true, user.id);
                                                  axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {}, {
                                                      withCredentials: true,
                                                      headers: {
                                                          "API-KEY": "91e93eb3-0fc5-4700-9864-e2ea5bdc5165",
                                                      },
                                                  })
                                                      .then(response => {
                                                          if (response.data.resultCode === 0) {
                                                              props.follow(user.id)
                                                          }
                                                          props.toggleFollowingProgress(false, user.id);
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
