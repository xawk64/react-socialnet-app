import React from 'react'
import { connect } from 'react-redux'
import Login from './Login'
import { authMeThunk, logInThunk } from '../../../redux/auth-reducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

class LoginContainer extends React.Component {
    onSubmit = (data) => {
        this.props.logInThunk(data.username, data.password)
       // this.props.history.push("/profile")
    }

    render() {
        return <Login {...this.props} onSubmit={this.onSubmit}/>
    }
}

const MapStateToProps = (state) => {
    return {
        isFetched: state.auth.isFetched
    }
}

export default compose(connect(MapStateToProps, {
    authMeThunk, 
    logInThunk}),
    withRouter
    )
    (LoginContainer)