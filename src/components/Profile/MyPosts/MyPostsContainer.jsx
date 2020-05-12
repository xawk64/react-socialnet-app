import React from 'react'
import Post from './Post/Post'
import MyPosts from './MyPosts'
import { updateNewPostActionCreater, addPostActionCreater } from '../../../redux/profile-reducer';

function MyPostsContainer (props) {
  
  let state = props.store.getState()
  let postsElements = state.profilePage.posts.map( post => (<Post text={post.text} likes={post.likes}/>))

  function newPostOnChange(newPostText) {
    let action = updateNewPostActionCreater(newPostText)
    props.store.dispatch(action)
  }

  function addPost() {
    let action = addPostActionCreater()
    props.store.dispatch(action)
  }

  return (
  <MyPosts newPostText={state.profilePage.newPostText} 
  updateNewPost={newPostOnChange} 
  addPost={addPost} 
  postsElements={postsElements}
  />
  );
}

export default MyPostsContainer