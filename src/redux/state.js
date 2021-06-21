import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "HY", likesCount: 4},
            {id: 2, message: "HY", likesCount: 67},
            {id: 3, message: "HY", likesCount: 6},
            {id: 4, message: "hello", likesCount: 400},
        ],
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrew'},
            {id: 2, name: 'Sasha'},
            {id: 3, name: 'Valera'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'Yo'},
        ],
    },
}

export const addPost = (postMessage) => {
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
}

export default state;
