import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = () => {
    const posts = [
        {id: 1, message: "HY", likesCount: 4},
        {id: 2, message: "HY", likesCount: 67},
        {id: 3, message: "HY", likesCount: 6},
        {id: 4, message: "hello", likesCount: 400},
    ]

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;
