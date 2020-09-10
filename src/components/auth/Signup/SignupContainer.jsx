import React from 'react'
import { connect } from 'react-redux'
import Signup from './Signup'
import { signUpThunk } from '../../../redux/auth-reducer'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'

class SignupContainer extends React.Component {

    state = {
        Error: null
    }

    componentDidUpdate() {
    if (this.props.isAuth)
    this.props.history.push("/profile")
    }

    signUp = (data) => {
        this.props.signUpThunk(data.username, data.email, data.password)
    }

    render(){
        return <Signup {...this.props} signUp={this.signUp} />
    }
}

const MapDispatchToProps = (state) => {
    return {
        isAuth: state.auth.isAuth
    }
}

let SignUpWithRouter = withRouter(Signup)

export default compose(connect(MapDispatchToProps, {
    signUpThunk}),
    withRouter
    )
    (SignupContainer)