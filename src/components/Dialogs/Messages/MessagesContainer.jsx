import React from 'react'
import MessagesItem from './MessagesItem/MessagesItem'
import NewMessage from './NewMessage/NewMessage'
import Messages from './Messages'
import { updateNewMessageActionCreater, sendMessageActionCreater } from '../../../redux/dialogs-reducer'

function MessagesContainer(props) {

  const sendMessage = () => {
    let action = sendMessageActionCreater()
    props.store.dispatch(action)
  }

  const newMessageOnChange = (newMess) => {
    let action = updateNewMessageActionCreater(newMess)
    props.store.dispatch(action)
  }

    let state = props.store.getState().dialogsPage
    let messagesElements = state.messagesObject.messages[state.dialogsObject.currentDialog]
    .map( m => (<MessagesItem mess={m.mess} author={m.author} />))

    return (
        <Messages messagesElements={messagesElements} 
        author={state.dialogsObject.dialogs[state.dialogsObject.currentDialog].name} 
        newMessageText={state.messagesObject.newMessageText}
        dispatch={props.dispatch} 
        sendMessage={sendMessage}
        updateNewMessageText={newMessageOnChange}
        />
    )
}

export default MessagesContainer