import {actions} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => ({
    posts: state.profilePage.posts,
})


const MyPostsContainer = connect(mapStateToProps, {addPost: actions.addPost})(MyPosts);

export default MyPostsContainer;
