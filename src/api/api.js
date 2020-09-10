import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:8000')
const { default: Axios } = require("axios");

//socket part

export const removeSocketListeners = () => {
    socket.removeAllListeners('messages')
}

export const subscribeToMessages = ( cb ) => {
    socket.on('messages', (message) => {
        cb(message) 
    })
} 

export const sendMessageSocket = (myProfileId, myName, userProfileId, message) => {
    socket.emit('messages', myProfileId, myName, userProfileId, message)
}

export const setSocketId = (myProfileId) => {
    socket.emit('messages', myProfileId)
}

//axios part

let axiosAuthInstance = Axios.create({
    baseURL: "http://localhost:8080/api/auth/"
})

let axiosProfileInstance = Axios.create({
    baseURL: "http://localhost:8080/api/"
})

let axiosFollowInstance = Axios.create({
    baseURL: "http://localhost:8080/api/follow"
})

let axiosPostsInstance = Axios.create({
    baseURL: "http://localhost:8080/api/posts"
})

let axiosChatInstance = Axios.create({
    baseURL: "http://localhost:8080/api/chats/"
})

export const followAPI = {
    follow: (profileId) => {
        return axiosFollowInstance.post ("", {profileId}, {headers: {"x-access-token": localStorage.getItem("token")}}).then(response => {
            return response.data
        })
    },
    unfollow: (profileId) => {
        return axiosFollowInstance.delete ("", {headers: {"x-access-token": localStorage.getItem("token")}, data: { profileId}} ).then(response => {
            return response.data
        })
    }
}

export const profileAPI = {
    getProfile (id) {

    if (!id)
    id = "my"
    return axiosProfileInstance.get("profile/" + id, {headers: {"x-access-token": localStorage.getItem("token")}})
    },
    getProfiles (page, limit) {
    return axiosProfileInstance.get(`profile/:?page=${page}&limit=${limit}`, {headers: {"x-access-token": localStorage.getItem("token")}}).then(response => {
        return response.data
    })
    },
    setProfile (profile) {
    return axiosProfileInstance.post("profile/", profile, {headers: {"x-access-token": localStorage.getItem("token")}}).then(response => {
        return response.data
    })
    }
}

export const authAPI =  {
    signUp: (username, email, password) => {
        return axiosAuthInstance.post("signup", {username, email, password})
    },
    logIn: (username, password) => {
        return axiosAuthInstance.post("signin", {username, password})
    },
    authMe: () => {
        return axiosAuthInstance.get("me", {headers: {"x-access-token": localStorage.getItem("token")}})
    }
}

export const postsAPI =  {
    setPost: (postText) => {
        return axiosPostsInstance.post("", {postText}, {headers: {"x-access-token": localStorage.getItem("token")}})
    },
    getPosts: (profileId) => {
        return axiosPostsInstance.get(profileId, {headers: {"x-access-token": localStorage.getItem("token")}})
    },
    putLike: (profileId, likeId) => {
        return axiosPostsInstance.post("like/", {profileId, likeId}, {headers: {"x-access-token": localStorage.getItem("token")}})
    }
}

export const chatAPI = {
    getChats () {
        return axiosChatInstance.get("", {headers: {"x-access-token": localStorage.getItem("token")}})
    },
    setMessage (message, profileId) {
        return axiosChatInstance.post("", {message, profileId}, {headers: {"x-access-token": localStorage.getItem("token")}})
    },
    createChat (profileId) {
        return axiosChatInstance.post("create", {profileId}, {headers: {"x-access-token": localStorage.getItem("token")}})
    }
}