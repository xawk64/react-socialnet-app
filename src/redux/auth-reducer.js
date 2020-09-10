import {authAPI} from "../api/api"
import { stopSubmit } from "redux-form"

const SET_USER_DATA = "SET_USER_DATA"
const TOGGLE_IS_AUTH = "TOGGLE_IS_AUTH"

let initialState = {
    userId: null,
    email: null,
    username: null,
    profileId: null,
    isAuth: false
}

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        case TOGGLE_IS_AUTH:{
            localStorage.setItem("token", "")
            return {
                ...state,
                isAuth: false
            }
        }

         default: return state
    }
        
}

export const setUserData = (userId, email, username, profileId) => 
({type: SET_USER_DATA, data: {userId, email, username, profileId}})

export const toggleIsAuth = () => ({type: TOGGLE_IS_AUTH})

export const signUpThunk = (username, email, password) => {
    return (dispatch) => {
    authAPI.signUp (username, email, password).then (response => {
        authAPI.logIn (username, password)
        .then (response =>{
            localStorage.setItem("token", response.data.accessToken)
            dispatch(setUserData(response.data.id, response.data.email, response.data.username, response.data.profileId))
            })
    })
    .catch((error) => {
        if (error.response) {
        return dispatch (stopSubmit("signup", {_error: error.response.data.error}))
        } else return dispatch (stopSubmit("signup", {_error: error.message}))
    })

}
}

export const logInThunk = (username, password) => {
    return (dispatch) => {
        authAPI.logIn (username, password).then (response =>{
            localStorage.setItem("token", response.data.accessToken)
            dispatch(setUserData(response.data.id, response.data.email, response.data.username, response.data.profileId))
        })
        .catch((error) => {
            if (error.response) {
                return dispatch (stopSubmit("login", {_error: error.response.data.error}))
                } else return dispatch (stopSubmit("login", {_error: error.message}))
        })
}
}

export const authMeThunk = () => { 
    return (dispatch) => {
    return authAPI.authMe ().then (response => {
        dispatch(setUserData(response.data.id, response.data.email, response.data.username, response.data.profileId))
    })
}
}