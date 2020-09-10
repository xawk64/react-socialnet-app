import { postsAPI } from "../api/api"
import { reset } from "redux-form"

const SET_POSTS = "SET_POSTS"
const SET_POST = "SET_POST"
const PUT_LIKE = "PUT_LIKE"

let initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {...state, posts: action.posts}

            case SET_POST:
                return {...state, posts: [...state.posts, {text: action.postText, likesCount: 0}]}

            case PUT_LIKE: {
                return {...state, posts: [...state.posts.map(post => {
                    if (post._id == action.likeId) {
                        post.likesCount++
                        return post} else {
                            return post
                        }
                    }
                )]}
                
            }

            default:  return state

    }
        
}

const setPosts = (posts) => ({type: SET_POSTS, posts})
const setPost = (postText) => ({type: SET_POST, postText})
const putLike = (likeId) => ({type: PUT_LIKE, likeId})

export const getPostsThunk = (profileId) => {
 return (dispatch) => {
 
    postsAPI.getPosts (profileId).then (response => {
        if (response.data.posts) dispatch(setPosts(response.data.posts))
    })
}
}

export const setPostThunk = (postText) => {
    return (dispatch) => {
        postsAPI.setPost (postText).then (response => {
            dispatch(setPost(postText))
            dispatch(reset("newPost"))
        }) 
}
}

export const putLikeThunk = (profileId, likeId) => {
    return (dispatch) => {
        postsAPI.putLike (profileId, likeId).then (response => {
            dispatch(putLike(likeId))
        })
}
}
