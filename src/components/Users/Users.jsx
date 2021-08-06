import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({users, pageSize, totalUsersCount, currentPage, onPageChanged, follow, unfollow, followingInProgress}) => {
    return (
        <div>
            <Paginator pageSize={pageSize}
                       currentPage={currentPage}
                       totalItemsCount={totalUsersCount}
                       onPageChanged={onPageChanged}
                       portionSize={10}/>
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
