const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

let initialState = {
    posts: [
    {id: 0, text: "My first post! Yesss!!!!", likes: 0},
    {id: 1, text: "My second post? it real?", likes: 0},
    {id: 2, text: "Something for third post!", likes: 0},
    {id: 3, text: "What there?", likes: 0},
    {id: 4, text: "It is my life! My rules!!!", likes: 0},
  ],
newPostText: 'Type this your new post!'
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let post = {
                id: Date.now(),
                text: state.newPostText,
                likes: 0
            }
            state.posts.push(post)
            state.newPostText = ''
            return state

        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.text
            return state
            default: return state
    }
        
}

export let addPostActionCreater = () => ({type: ADD_POST})
export let updateNewPostActionCreater = (newText) => ({type: UPDATE_NEW_POST_TEXT, text: newText})