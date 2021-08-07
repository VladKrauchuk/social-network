import React, {memo} from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

const maxLength30 = maxLength(30);

const MyPosts = memo((props) => {
    const postsElements = [...props.posts].reverse()
        .map(post => <Post message={post.message} likesCount={post.likesCount} key={post.id}/>)

    let addNewPost = (values) => {
        props.addPost(values.newPostText);
    }

    return (
        <div className={styles.postsBlock}>
            <h3>
                My posts
            </h3>
            <div>
                <AddNewPostFormRedux onSubmit={addNewPost}/>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
})

const AddNewPostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field validate={[required, maxLength30]} component={Textarea} type="text" name="newPostText"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddNewPostFormRedux = reduxForm({form: "profileAddNewPostForm"})(AddNewPostForm);

export default MyPosts;
