import { profileAPI, followAPI } from "../api/api"

const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_USERS = "SET_USERS"
const SELECT_PAGE = "SELECT_PAGE"
const TOGGLE_IS_FETCHED = "TOGGLE_IS_FETCHED"
const ADD_FOLLOWING_IN_PROGRESS = "ADD_FOLLOWING_IN_PROGRESS"
const DELETE_FOLLOWING_IN_PROGRESS = "DELETE_FOLLOWING_IN_PROGRESS"

let initialState = {
    users: [],
    usersCount: 20,
    limit: 4,
    currentlyPage: 1,
    isFetched: false,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {...state, users: [...state.users.map (u => {
                if (u._id === action.id)
                return {...u, public: {...u.public, followed: true}}
                return u
            })]}

        case UNFOLLOW:
            return {...state, users: [...state.users.map (u => {
                if (u._id === action.id)
                return {...u, public: {...u.public, followed: false}}
                return u
            })]}
        
        case SET_USERS:
            return {...state, users: [...action.users], usersCount: action.usersCount}

        case SELECT_PAGE:
            return {...state, currentlyPage: action.id}

        case TOGGLE_IS_FETCHED:
            return {...state, isFetched: !state.isFetched}
        
        case ADD_FOLLOWING_IN_PROGRESS:
            return {...state, followingInProgress: [...state.followingInProgress, action.profileId]}

        case DELETE_FOLLOWING_IN_PROGRESS:
            let filtered = state.followingInProgress.filter(id => id !== action.profileId)
            return {...state, followingInProgress: filtered}

            default:  return state

    }
        
}

export let follow = (id) => ({type: FOLLOW, id})
export let unfollow = (id) => ({type: UNFOLLOW, id})
export let setUsers = (users, usersCount) => ({type: SET_USERS, users, usersCount})
export let selectPage = (id) => ({type: SELECT_PAGE, id})
export let toggleIsFetched = () => ({type: TOGGLE_IS_FETCHED})
export let addFollowingInProgress = (profileId) => ({type: ADD_FOLLOWING_IN_PROGRESS, profileId})
export let deleteFollowingInProgress = (profileId) => ({type: DELETE_FOLLOWING_IN_PROGRESS, profileId})

export const getProfilesThunk = (page, limit) => {
 return (dispatch) => {
    dispatch(toggleIsFetched())
    dispatch(selectPage(page))
    profileAPI.getProfiles(page, limit).then(data => {
        dispatch(setUsers(data.users, data.usersCount))
        dispatch(toggleIsFetched())
    })
}
}

export const followThunk = (profileId) => {
return (dispatch) => {
    dispatch(addFollowingInProgress(profileId))
    followAPI.follow(profileId).then (data => {
        dispatch(follow(profileId))
        dispatch(deleteFollowingInProgress(profileId))
    }) 
}
}

export const unfollowThunk = (profileId) => {
    return (dispatch) => {
        dispatch(addFollowingInProgress(profileId))
        followAPI.unfollow(profileId).then (data => {
            dispatch(unfollow(profileId))
            dispatch(deleteFollowingInProgress(profileId))
        }) 
}
}