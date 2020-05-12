import React from 'react'
import s from './NewMessage.module.scss'


function NewMessage(props) {

let newMessage = React.createRef()
  const sendMessage = () => {
    props.sendMessage()
  }

  const newMessageOnChange = () => {
    let newMess = newMessage.current.value
    props.updateNewMessageText(newMess)
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