import React from 'react'
import { connect } from 'react-redux'
import { follow, unfollow, setUsers, selectPage, toggleIsFetched, getProfilesThunk, followThunk, unfollowThunk } from '../../redux/users-reducer'
import Users from './Users'
import { createChatThunk } from '../../redux/dialogs-reducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

class UsersContainer extends React.Component {
    getUsers = (page, limit) => {
        this.props.getProfilesThunk(page, limit)
    }

    onSendMessage = (profileId) => {
        this.props.createChatThunk(profileId)
        .then ( () => {
            this.props.history.push("/dialogs")
        })
    }

    componentDidMount() {
       this.getUsers(1, this.props.limit)
    }

    render () {
        return <Users {...this.props} getUsers = {this.getUsers} onSendMessage={this.onSendMessage}/>
    }
}


const MapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersCount: state.usersPage.usersCount,
        limit: state.usersPage.limit,
        currentlyPage: state.usersPage.currentlyPage,
        isFetched: state.usersPage.isFetched,
        followingInProgress: state.usersPage.followingInProgress
    }
}

export default compose (withRouter,
    connect(MapStateToProps, {
    follow, 
    unfollow, 
    setUsers, 
    selectPage, 
    toggleIsFetched, 
    getProfilesThunk,
    followThunk,
    createChatThunk,
    unfollowThunk}))
    (UsersContainer)