import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { profileReducer } from "./profile-reducer";
import { dialogsReducer } from "./dialogs-reducer";
import { usersReducer } from "./users-reducer";
import { authReducer } from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import { reducer as formReducer } from "redux-form";
import { postsReducer } from "./posts-reducer";
import { appReducer } from "./app-reducer";
import {composeWithDevTools} from 'redux-devtools-extension'

const reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    posts: postsReducer,
    app: appReducer,
    form: formReducer
})


const store = createStore(reducers, composeWithDevTools (applyMiddleware(thunkMiddleware)))

export default store