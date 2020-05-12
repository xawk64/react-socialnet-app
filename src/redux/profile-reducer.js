const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"

export const profileReducer = (state, action) => {
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