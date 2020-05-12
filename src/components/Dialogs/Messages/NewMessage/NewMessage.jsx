import React from 'react'
import s from './NewMessage.module.scss'
import { updateNewMessageActionCreater, sendMessageActionCreater } from '../../../../store'

function NewMessage(props) {
let newMessage = React.createRef()
  const sendMessage = () => {
    let action = sendMessageActionCreater()
    props.dispatch(action)
  }

  const newMessageOnChange = (e) => {
    let newMess = newMessage.current.value
    let action = updateNewMessageActionCreater(newMess)
    props.dispatch(action)
  }

  return (
    <div className={s.NewMessage}>
    <h3>Send message to {props.author}</h3> <br></br>
    <textarea onChange={newMessageOnChange} ref={newMessage} value={props.newMessageText}/>
    <br></br>
    <button onClick={sendMessage}>Add post</button>
    </div>
  )
}

export default NewMessage