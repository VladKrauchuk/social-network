let rerenderEntireTree = () => {
    console.log("State has been changed");
}

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "HY", likesCount: 4},
            {id: 2, message: "HY", likesCount: 67},
            {id: 3, message: "HY", likesCount: 6},
            {id: 4, message: "hello", likesCount: 400},
        ],
        newPostText: "",
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

window.state = state;

export const addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likesCount: 0,
    };

    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = "";
    rerenderEntireTree(state);
}

export const updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}

export default state;
