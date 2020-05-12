import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
    <div className="app-wrapper">
      <Header />
      <Nav />
      <div className="app-wrapper-content">
        <Route path="/profile" render={ () => <Profile
        profilePage={props.data.profilePage} dispatch={props.dispatch}
        />}/>
        <Route path="/dialogs" render={ () => <Dialogs dialogsPage={props.data.dialogsPage} 
        dispatch={props.dispatch}
        />}/>
        <Route path="/news" component={Dialogs}/>
        <Route path="/music" component={Dialogs}/>
        <Route path="/settings" component={Dialogs}/>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
