import React from 'react'
import s from './NewPost.module.scss'
import { updateNewPostActionCreater, addPostActionCreater } from '../../../../redux/profile-reducer';

function NewPost(props) {
  let newPost = React.createRef()

  function newPostOnChange() {
    let newPostText = newPost.current.value
    let action = updateNewPostActionCreater(newPostText)
    props.dispatch(action)
  }

  function addPost() {
    let action = addPostActionCreater()
    props.dispatch(action)
  }

  return (
    <div className={s.newPost}>
          <h2>Create new post</h2>
          <textarea ref={newPost} value={props.newPostText} onChange={newPostOnChange}/>
          <br></br>
          <button onClick={addPost}>Add post</button>
    </div>
  );
}


export default NewPost