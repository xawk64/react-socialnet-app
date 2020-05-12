import React from 'react'
import MessagesItem from './MessagesItem/MessagesItem'
import s from './Messages.module.scss'
import NewMessage from './NewMessage/NewMessage'

function Messages(props) {

    let messagesElements = props.messagesObject.messages[props.dialogsObject.currentDialog]
    .map( m => (<MessagesItem mess={m.mess} author={m.author} />))

    return (
        <div className={s.messages}>
        <ul>
            {messagesElements}
        </ul>
        <br></br>
        <NewMessage author={props.dialogsObject.dialogs[props.dialogsObject.currentDialog].name} 
        newMessageText={props.messagesObject.newMessageText}
        dispatch={props.dispatch}
        />
        </div>
    )
}

export default Messages