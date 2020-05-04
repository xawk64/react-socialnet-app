import React from 'react'
import s from './MyPosts.module.scss'
import NewPost from './NewPost/NewPost'
import Post from './Post/Post'

function MyPosts(props) {
  let postsElements = props.posts.map( post => (<Post text={post.text} likes={post.likes}/>))

  return (
    <div className={s.MyPosts}>
    <NewPost newPostText={props.newPostText} 
    updateNewPostText={props.updateNewPostText}
    addPost={props.addPost} 
    />
    <h2>My posts</h2>
    {postsElements}
    </div>
  );
}

export default MyPosts