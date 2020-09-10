import React from 'react'
import s from './NewMessage.module.scss'
import { Field, reduxForm } from 'redux-form'
import { wErrValidationComponent } from '../../../commons/FormControls'
import { minLengthCreator, maxLengthCreator } from '../../../../utils/validators'
const Textarea = wErrValidationComponent("textarea")
const minLength4 = minLengthCreator(4)
const maxLength3000 = maxLengthCreator(3000)

const messagesForm = (props) => {
  return <form onSubmit={props.handleSubmit}>
    <Field name="messageText" component={Textarea} validate={[minLength4, maxLength3000]}/>
    <br></br>
    <button>send message</button>
  </form>
}

const MessagesFormRedux = reduxForm({form: "messages"})(messagesForm)

function NewMessage(props) {

  return (props.selectedUser ?
    <div className={s.NewMessage}>
    <h3>Send message to {props.selectedUser}</h3> <br></br>
    <MessagesFormRedux onSubmit={props.sendMessage}/>
    </div> : null
  )
}

export default NewMessage