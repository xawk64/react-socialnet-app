const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SELECT_DIALOG = "SELECT_DIALOG"
const SEND_MESSAGE = "SEND_MESSAGE"

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

export const dialogsReducer = (state, action) => {
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