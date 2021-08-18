import profileReducer, {actions} from "./profile-reducer";

let state = {
    posts: [
        {id: 1, message: "HY", likesCount: 4},
        {id: 2, message: "HY", likesCount: 67},
        {id: 3, message: "HY", likesCount: 6},
    ],
    profile: null,
    status: '',
}

test('length of posts should be incremented', () => {
    let action = actions.addPost("HELLO");
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(4);
});

test('message of new post should be correct', () => {
    let newMessageText = "HELLO";
    let action = actions.addPost(newMessageText);

    let newState = profileReducer(state, action);

    expect(newState.posts[3].message).toBe(newMessageText);
});

test('after deleting length of messages should be decrement', () => {
    let action = actions.deletePost(1);
    let newState = profileReducer(state, action);

    expect(newState.posts.length).toBe(2);
});
