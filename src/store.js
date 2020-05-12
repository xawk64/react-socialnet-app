const ADD_POST = "ADD_POST"
const UPDATE_NEW_POST_TEXT = "UPDATE_NEW_POST_TEXT"
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE_NEW_MESSAGE_TEXT"
const SELECT_DIALOG = "SELECT_DIALOG"
const SEND_MESSAGE = "SEND_MESSAGE"

export let addPostActionCreater = () => ({type: ADD_POST})
export let updateNewPostActionCreater = (newText) => ({type: UPDATE_NEW_POST_TEXT, text: newText})
export let selectDialogActionCreater = (id) => ({type: SELECT_DIALOG, id})
export let sendMessageActionCreater = () => ({type: SEND_MESSAGE})
export let updateNewMessageActionCreater = (newMess) => ({type: UPDATE_NEW_MESSAGE_TEXT, mess: newMess})

let store = {
  _data: {
    dialogsPage: {
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
    },
    profilePage: {
        posts: [
            {id: 0, text: "My first post! Yesss!!!!", likes: 0},
            {id: 1, text: "My second post? it real?", likes: 0},
            {id: 2, text: "Something for third post!", likes: 0},
            {id: 3, text: "What there?", likes: 0},
            {id: 4, text: "It is my life! My rules!!!", likes: 0},
          ],
        newPostText: 'Type this your new post!'
    }
  },
  _methods: {
    dialogsPage: {
      selectDialog (id) {
        store._data.dialogsPage.dialogsObject.currentDialog = id;
        store._callSubscriber(store._data)
      },
      sendMessage () {
        let newMessage = {
          id: Date.now(), 
          author: "Me", 
          mess: store._data.dialogsPage.messagesObject.newMessageText
        }
        let id = store._data.dialogsPage.dialogsObject.currentDialog
        store._data.dialogsPage.messagesObject.messages[id].push(newMessage)

        if (newMessage.mess === "Hi!"){
          this.sendBotMesage()
        }

        store._data.dialogsPage.messagesObject.newMessageText = ''
        store._callSubscriber(store._data)
      },
      updateNewMessageText (newMessageText) {
        store._data.dialogsPage.messagesObject.newMessageText = newMessageText
        store._callSubscriber(store._data)
      },
      sendBotMesage () {
        let id = store._data.dialogsPage.dialogsObject.currentDialog
        store._data.dialogsPage.messagesObject.messages[id]
        .push(
          {id: Date.now(),
          author: store._data.dialogsPage.dialogsObject.dialogs[id].name,
          mess: "Hi bro!"}
        )
      }
    },
    profilePage: {
      addPost() {
        let post = {
          id: Date.now(),
          text: store._data.profilePage.newPostText,
          likes: 0
        }
        store._data.profilePage.posts.push(post)
        store._data.profilePage.newPostText = ''
        store._callSubscriber(store._data)
      },
      updateNewPostText (newPostText) {
        store._data.profilePage.newPostText = newPostText
        store._callSubscriber(store._data)
      }
    }
  },
  dispatch (action) {
    
    if (action.type === ADD_POST) {
      this._methods.profilePage.addPost()
    } else 
    if (action.type === UPDATE_NEW_POST_TEXT) {
      this._methods.profilePage.updateNewPostText(action.text)
    } else
    if (action.type === SELECT_DIALOG) {
      this._methods.dialogsPage.selectDialog(action.id)
    } else
    if (action.type === SEND_MESSAGE) {
      this._methods.dialogsPage.sendMessage()
    } else
    if (action.type === UPDATE_NEW_MESSAGE_TEXT)
    {
      this._methods.dialogsPage.updateNewMessageText(action.mess)
    }
  },
  subscribe (observer) {
    this._callSubscriber = observer
  },
  _callSubscriber () {
    console.log('not a subcsriber!')
  },
  init () {
    this._callSubscriber(this._data)
  }
}

export default store

