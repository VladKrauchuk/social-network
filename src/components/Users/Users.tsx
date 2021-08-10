import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from "../../types/types";

type PropsType = {
    users: Array<UserType>
    totalUsersCount: number
    pageSize: number
    onPageChanged: (p: number) => void
    currentPage: number
    follow: (userId: number) => void
    unfollow: (userId: number) => void
    followingInProgress: Array<number>
}

const Users: React.FC<PropsType> = ({users, pageSize, totalUsersCount, currentPage, onPageChanged, follow, unfollow, followingInProgress}) => {
    return (
        <div>
            <Paginator pageSize={pageSize}
                       currentPage={currentPage}
                       totalItemsCount={totalUsersCount}
                       onPageChanged={onPageChanged}/>
            {
                users.map(user => <User key={user.id}
                                        user={user}
                                        follow={follow}
                                        unfollow={unfollow}
                                        followingInProgress={followingInProgress}/>
                )}
        </div>
    )
}
export default Users;
