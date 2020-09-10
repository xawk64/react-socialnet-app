import React from 'react'
import s from './Nav.module.scss'
import { NavLink } from 'react-router-dom'

function Nav(props) {
    return (
      <nav className={s.nav}>
        <ul>
          <li onClick={()=> props.refresh()}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></li>
          <li><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></li>
          <li><NavLink to="/users" activeClassName={s.active}>Users</NavLink></li>
          <li><NavLink to="/news" activeClassName={s.active}>News</NavLink></li>
          <li><NavLink to="/music" activeClassName={s.active}>Music</NavLink></li>
          <li><NavLink to="/settings" activeClassName={s.active}>Setings</NavLink></li>
        </ul>
      </nav>
    );
}

export default Nav