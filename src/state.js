let rerenderVirtualDom = () => {
}

export let data = {
    dialogsPage: {
        messages: [
            {id: 0, author: "Me:", mess: "Hi, how are you?"},
            {id: 1, author: "Ivan:", mess: "I am normal. How are you?"},
            {id: 2, author: "Me:", mess: "I am too, thank you"}
          ],
        dialogs: [
            {id: 1, name: "Vasya"},
            {id: 2, name: "Petya"},
            {id: 3, name: "Misha"},
            {id: 4, name: "Ivan"},
            {id: 5, name: "Konstantin"},
            {id: 6, name: "Nikolay"},
            {id: 7, name: "German"},
            {id: 8, name: "John"}
          ]
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
}

export let methods = {
  profilePage: {
    updateNewPostText: updateNewPostText,
    addPost: addPost
  }
}

setInterval(() => {
data.profilePage.posts.forEach(element => {
element.likes += Math.round (Math.random()*10) 
})
rerenderVirtualDom(data, methods)
}, 1000)

function addPost() {
  let post = {
    id: Date.now(),
    text: data.profilePage.newPostText,
    likes: 0
  }
  data.profilePage.posts.push(post)
  data.profilePage.newPostText = ''
  rerenderVirtualDom(data, methods)
}

function updateNewPostText(newPostText) {
  data.profilePage.newPostText = newPostText
  rerenderVirtualDom(data, methods)
}

export let subscribe = (observer) => {
  rerenderVirtualDom = observer
}