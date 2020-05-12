import { profileReducer } from "./profile-reducer"
import { dialogsReducer } from "./dialogs-reducer"

let store = {
  _state: {
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
  dispatch (action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action)
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
    this._callSubscriber()
  },
  subscribe (observer) {
    this._callSubscriber = observer
  },
  _callSubscriber () {
    console.log('not a subcsriber!')
  },
  init () {
    this._callSubscriber()
  },
  getState () {
    return this._state
  }
}

export default store

