import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>

            </div>
            <div className={styles.posts}>
                <Post message={"hey"} likesCount={15}/>
                <Post message={"yo"} likesCount={20}/>
                <Post message={"hello"} likesCount={5}/>
            </div>
        </div>
    )

}

export default MyPosts;
