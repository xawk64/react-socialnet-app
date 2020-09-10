import { authMeThunk } from "./auth-reducer"

const TOGGLE_IN_INITIALIZE = "TOGGLE_IN_INITIALIZE"

let initialState = {
    inInitialize: false
}

export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IN_INITIALIZE:
            return {
                ...state,
                inInitialize: !state.inInitialize
            }

         default: return state
    }
        
}

export const toggleInInitialize = () => ({type: TOGGLE_IN_INITIALIZE})

export const initializedThunk = () => (dispatch) => {
    dispatch(toggleInInitialize())
    let promise = dispatch(authMeThunk())
    promise.then( () => {
        dispatch(toggleInInitialize())
    })
    promise.catch( () => {
        debugger
        dispatch(toggleInInitialize())
    })
}