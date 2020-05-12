const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SELECT_DIALOG = "SELECT_DIALOG"
const SEND_MESSAGE = "SEND_MESSAGE"

let initialState = {
    messagesObject: {
        messages: [
        [
          {id: 0, author: "Me:", mess: "Hi, how are you?"},
          {id: 1, author: "Vasya:", mess: "I am normal. How are you?"},
          {id: 2, author: "Me:", mess: "I am too, thank you"}
        ],
        [
          {id: 0, author: "Me:", mess: "Hi, how are you?"},
          {id: 1, author: "Petya:", mess: "I am not normal. How are you?"},
          {id: 2, author: "Me:", mess: "I am too, thank you"}
        ],
        [],
        [],
        []
      ],
      newMessageText: "type here your message!"
    },
      dialogsObject: {
        dialogs: [
          {id: 0, name: "Vasya"},
          {id: 1, name: "Petya"},
          {id: 2, name: "Misha"},
          {id: 3, name: "Ivan"},
          {id: 4, name: "Konstantin"}
        ],
        currentDialog: 0,
        countDialogs: 5
      }
}

const selectDialog = (state, id) => {
    state.dialogsObject.currentDialog = id;
    return state
}

const sendMessage = (state) => {
    let newMessage = {
      id: Date.now(), 
      author: "Me", 
      mess: state.messagesObject.newMessageText
    }
    let id = state.dialogsObject.currentDialog
    state.messagesObject.messages[id].push(newMessage)

    if (newMessage.mess === "Hi!"){
    state = sendBotMessage(state)
    }
    state.messagesObject.newMessageText = ''
    return state
}

const updateNewMessageText = (state, newText) => {
    state.messagesObject.newMessageText = newText
    return state
}

const sendBotMessage = (state) => {
    let id = state.dialogsObject.currentDialog
    state.messagesObject.messages[id]
    .push(
      {id: Date.now(),
      author: state.dialogsObject.dialogs[id].name,
      mess: "Hi bro!"}
    )
    return state
}

export const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_DIALOG:
            return selectDialog(state, action.id)
        case UPDATE_NEW_MESSAGE_TEXT:
            return updateNewMessageText(state, action.mess)
        case SEND_MESSAGE:
            return sendMessage(state)
            default: return state
    }
        
}

export let selectDialogActionCreater = (id) => ({type: SELECT_DIALOG, id})
export let sendMessageActionCreater = () => ({type: SEND_MESSAGE})
export let updateNewMessageActionCreater = (newMess) => ({type: UPDATE_NEW_MESSAGE_TEXT, mess: newMess})