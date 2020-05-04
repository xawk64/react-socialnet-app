import React from 'react'
import s from './Header.module.scss'

function Header() {
    return (
      <header className={s.header}>
        <img src="https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8.png"></img>
        <h2>My social network</h2>
      </header>
    );
}

export default Header