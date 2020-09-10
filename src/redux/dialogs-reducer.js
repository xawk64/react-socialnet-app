import { profileAPI, chatAPI } from "../api/api"

const SELECT_CHAT = "SELECT_CHAT"
const SET_CHATS = "SET_CHATS"
const SET_MESSAGE = "SET_MESSAGE"
const SET_MESSAGE_SOCKET = "SET_MESSAGE_SOCKET"
const INIT_STATE = "INIT_STATE"

let initialState = {
    usersFullnames: [],
    usersProfileId: [],
    chats: undefined,
    currentChat: 0,
}


export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CHAT:
            return { ...state, currentChat: action.id}

        case SET_CHATS: {
            return {...state, chats: action.chats.chatsExport, usersFullnames: action.chats.usersFullnames, usersProfileId: action.chats.usersProfileId}
        }
        case SET_MESSAGE: {
            let newChats = [...state.chats]
            if (!newChats[state.currentChat]) {
              newChats[state.currentChat] = []
            }
            newChats[state.currentChat].push(action.message) 
            return {...state, chats: newChats}
        }

        case SET_MESSAGE_SOCKET: {

            let usersProfileId = []
            let usersFullnames = []
            if (!state.usersProfileId && !state.usersFullnames) {
              usersProfileId = [action.authorId]
              usersFullnames = [action.authorName]
            } else {
              usersProfileId = [...state.usersProfileId]
              usersFullnames = [...state.usersFullnames]
            }
            let chatIndex = usersProfileId.indexOf(action.authorId)

            if (chatIndex === -1) {
              usersProfileId.push(action.authorId)
              usersFullnames.push(action.authorName)
              chatIndex = usersProfileId.indexOf(action.authorId)
            }

            let newChats = []
            if (state.chats) {
              newChats = [...state.chats]
            } 
            if (!newChats[chatIndex]) {
              newChats[chatIndex] = []
            }
            newChats[chatIndex].push({text: action.message, author: usersFullnames[chatIndex], date: action.date}) 
            return {...state, chats: newChats, usersFullnames, usersProfileId}
        }

        case INIT_STATE: {
          return {
            usersFullnames: [],
            usersProfileId: [],
            chats: undefined,
            currentChat: 0,
        }
        }

            default: return state
    }
        
}

const selectChat = (id) => ({type: SELECT_CHAT, id})
const setMessage = (message) => ({type: SET_MESSAGE, message})
const setChats = (chats) => ({type: SET_CHATS, chats})
const initState = () => ({type: INIT_STATE})
export const setMessageSocket = (message, authorId, authorName, date) => ({type: SET_MESSAGE_SOCKET, message, authorId, authorName, date})

export const setMessageThunk = (message, profileId) => (dispatch) => {
  chatAPI.setMessage(message, profileId).then((response) => {
    dispatch(setMessage(response.data))
  })
}

export const dialogsInitState = () => (dispatch) => {
  dispatch(initState())
}

export const selectChatThunk = (id) => (dispatch) => {
  dispatch(selectChat(id))
}

export const getChatsThunk = () => (dispatch) => {
  chatAPI.getChats().then((response) => {
    dispatch(setChats(response.data))
  })
}

export const createChatThunk = (profileId) => (dispatch) => {
  return chatAPI.createChat(profileId)
}