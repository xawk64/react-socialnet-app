import { profileAPI } from "../api/api"

const ADD_POST = "ADD_POST"
const TOGGLE_IS_FETCHED = "TOGGLE_IS_FETCHED"
const SET_PROFILE = "SET_PROFILE"

let initialState = {
profile: null,
isFetched: false,
profileId: null
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_PROFILE:
            return {...state, profile: action.profile, profileId: action.id}

        case TOGGLE_IS_FETCHED:{
            return {...state, isFetched: !state.isFetched}
        }
        
            default:  return state 
    }
        
}

export let setProfile = (profile, id) => ({type: SET_PROFILE, profile, id})
export let toggleIsFetched = () => ({type: TOGGLE_IS_FETCHED})

export const getProfileThunk = (id) => {
   return (dispatch) => {
    dispatch(toggleIsFetched())
    profileAPI.getProfile(id).then(response => {
        dispatch(setProfile(response.data, id))
        dispatch(toggleIsFetched())
    })
}
}

export const setProfileThunk = (profile) => {
return (dispatch) => {
    dispatch(toggleIsFetched())
    profileAPI.setProfile(profile).then(data => {
        dispatch(toggleIsFetched())
        dispatch(setProfile(profile))
    })
}
}