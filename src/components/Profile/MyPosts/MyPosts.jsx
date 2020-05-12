import React from 'react'
import s from './MyPosts.module.scss'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'

function MyPosts(props) {
  
  return (
    <div className={s.MyPosts}>
    <NewPost updateNewPost={props.updateNewPost} 
    newPostText={props.newPostText} 
    addPost={props.addPost} 
    />
    <h2>My posts</h2>
    {props.postsElements}
    </div>
  );
}

export default MyPosts