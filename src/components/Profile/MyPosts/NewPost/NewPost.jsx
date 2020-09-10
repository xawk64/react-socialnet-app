import React from 'react'
import s from './NewPost.module.scss'
import { Field, reduxForm } from 'redux-form'
import { wErrValidationComponent } from '../../../commons/FormControls'
import { minLengthCreator, maxLengthCreator } from '../../../../utils/validators'
const Textarea = wErrValidationComponent("textarea")
const minLength4 = minLengthCreator(4)
const maxLength3000 = maxLengthCreator(3000)

const NewPostForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
  <Field placeholder="Type your new post there" name="newPost" component={Textarea} validate={[minLength4, maxLength3000]}></Field>
  <br></br>
  <button disabled={props.submitting} >Add post</button>
  </form>
}

const NewPostFormRedux = reduxForm({form: "newPost"})(NewPostForm)

function NewPost(props) {
  return <div className={s.newPost}>
          <h2>Create new post</h2>
          <NewPostFormRedux onSubmit={props.addPost} />
    </div>
}


export default NewPost