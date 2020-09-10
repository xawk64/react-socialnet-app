import React from 'react'
import s from './Messages.module.scss'
import NewMessage from './NewMessage/NewMessage'
import { useEffect } from 'react'
import { subscribeToMessages, setSocketId, removeSocketListeners } from '../../../api/api'

function Messages(props) {
    
    useEffect( () => {
        
        subscribeToMessages(( {message, authorId, authorName, date} ) => {
            props.setMessageSocket(message, authorId, authorName, date)
        })
        return () => {
            removeSocketListeners()
        } 
    }, [])

    useEffect( () => {
        setSocketId(props.myProfileId)
    }, props.myProfileId)

    return (
        <div className={s.messages}>
        <ul>
            {props.messagesElements}
        </ul>
        <br></br>
        <NewMessage selectedUser={props.selectedUser} 
        sendMessage={props.sendMessage}
        />
        </div>
    )
}

export default Messages