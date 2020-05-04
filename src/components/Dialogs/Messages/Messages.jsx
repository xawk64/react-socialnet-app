import React from 'react'
import MessagesItem from './MessagesItem/MessagesItem'
import s from './Messages.module.scss'

function Messages(props) {

    let messagesElements = props.messages.map( m => (<MessagesItem mess={m.mess} author={m.author} />))

    return (
        <div className={s.messages}>
        <ul>
            {messagesElements}
        </ul>
        </div>
    )
}

export default Messages