import React from 'react';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Profile from './components/Profile';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Header />
      <Nav />
      <Profile />
      <Footer />
    </div>
  );
}

export default App;
