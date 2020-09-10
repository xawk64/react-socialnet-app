let state = {
  posts: [
  {id: 0, text: "My first post! Yesss!!!!", likes: 0},
  {id: 1, text: "My second post? it real?", likes: 0},
  {id: 2, text: "Something for third post!", likes: 0},
  {id: 3, text: "What there?", likes: 0},
  {id: 4, text: "It is my life! My rules!!!", likes: 0},
],
newPostText: 'Type this your new post!',
profile: null,
isFetched: false,
isProfileEdit: false,
editProfile: {
  public: {
      fullname: "",
      status: "",
      location: {
        city: "",
        country: ""
      },
      photoUrl: {
        small: "",
        large: ""
      },
      profession: "",
      date: ""
    },
    private: {
        sexOrientation: ""
    }
}
}

let copyState = {...state, editProfile: {...state.editProfile, public: {...state.editProfile.public, fullname: "action.fullname"} } } 

console.log(copyState)
console.log(state)