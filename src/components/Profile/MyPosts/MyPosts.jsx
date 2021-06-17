import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    const posts = [
        {id: 1, message: "HY", likesCount: 4},
        {id: 2, message: "HY", likesCount: 67},
        {id: 3, message: "HY", likesCount: 6},
        {id: 4, message: "hello", likesCount: 409},
    ]

    const postsElements = posts.map(post => <Post message={post.message} likesCount={post.likesCount}/>)

    return (
        <div className={styles.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;
