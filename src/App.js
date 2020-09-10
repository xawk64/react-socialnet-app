import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';
import UsersContainer from './components/users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import { connect } from 'react-redux';
import LoginContainer from './components/auth/Login/LoginContainer';
import SignupContainer from './components/auth/Signup/SignupContainer';
import NavContainer from './components/Nav/NavContainer';
import { compose } from 'redux';
import { initializedThunk } from './redux/app-reducer';
import Preloader from './components/Global/preloader/Preloader';


class App extends React.Component {
  componentDidMount () {
    this.props.initializedThunk()
  }

  render (){
    if (!this.props.inInitialize) {
    return (
      this.props.isAuth ? <div className="app-wrapper">
        <HeaderContainer />
        <NavContainer />
        <div className="app-wrapper-content">
        <Switch>
          <Route path="/profile/:userId?" render={ () => <ProfileContainer />}/>
          <Route path="/" exact={true} render={ () => <ProfileContainer />}/>
          <Route path="/dialogs" render={ () => <Dialogs />}/>
          <Route path="/users" render={ () => <UsersContainer/>}/>
          <Route path="/news" component={Dialogs}/>
          <Route path="/music" component={Dialogs}/>
          <Route path="/settings" component={Dialogs}/>
          <Route path="/*" render={ () => <ProfileContainer />}/>
          </Switch>
        </div>
      </div> :
      <>
      <Switch>
      <Route path="/login" render={ () => <LoginContainer/>}/>
      <Route path="/signup" render={ () => <SignupContainer/>}/>
      <Route path={"*"} exact render={ () => <LoginContainer />}/>
       </Switch>
       </>
    )
  } else {
    return <Preloader />
  }
}
  
}

const MapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
    inInitialize: state.app.inInitialize
  }
}

export default compose (
  withRouter,
  connect(MapStateToProps, {initializedThunk})
)
(App)
