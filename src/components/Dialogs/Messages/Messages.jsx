import React from 'react'
import s from './Messages.module.scss'
import NewMessage from './NewMessage/NewMessage'

function Messages(props) {

    return (
        <div className={s.messages}>
        <ul>
            {props.messagesElements}
        </ul>
        <br></br>
        <NewMessage author={props.author} 
        newMessageText={props.newMessageText}
        dispatch={props.dispatch}
        sendMessage={props.sendMessage}
        updateNewMessageText={props.updateNewMessageText}
        />
        </div>
    )
}

export default Messages