import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
    const postsElements = props.posts.map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

    let onAddPost = () => {
        props.addPost();
    }

    let onPostChange = (e) => {
        props.updateNewPostText(e.target.value);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <div>
                    <textarea value={props.newPostText} onChange={onPostChange}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )

}

export default MyPosts;
