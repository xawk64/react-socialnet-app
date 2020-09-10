import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setUserData, toggleIsAuth } from '../../redux/auth-reducer'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import { dialogsInitState } from '../../redux/dialogs-reducer'
import { removeSocketListeners } from '../../api/api'

class HeaderContainer extends React.Component {
  onLogout = () => {
    this.props.toggleIsAuth()
    this.props.dialogsInitState()
    this.props.history.push("/login")
    removeSocketListeners()
  }

   render() {
    return <Header {...this.props} onLogout={this.onLogout}/>
   }
}

const mapStateToProps = (state) => {
  return {
    username: state.auth.username,
    isAuth: state.auth.isAuth
  }
}

export default compose(
  connect(mapStateToProps, {setUserData, toggleIsAuth, dialogsInitState}),
  withRouter
)
(HeaderContainer)