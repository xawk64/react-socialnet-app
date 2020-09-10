import React from 'react'
import MessagesItem from '../components/Dialogs/Messages/MessagesItem/MessagesItem'

const { createSelector } = require("reselect")

const getChats = (state) => {
    return state.dialogsPage.chats
}

const getCurrentChat = (state) => {
    return state.dialogsPage.currentChat
}

export const getMessagesElements = createSelector(getChats, getCurrentChat, (chats, currentChat) => {
    return chats [currentChat]
    .map( m => (<MessagesItem mess={m.text} author={m.author} date={m.date} key={m._id}/>))
})