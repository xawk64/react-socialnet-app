import React from 'react'
import s from './NewPost.module.scss'


function NewPost(props) {
  let newPost = React.createRef()

  function newPostOnChange() {
  let newPostText = newPost.current.value
   props.updateNewPost(newPostText)
  }

  function addPost() {
    props.addPost()
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