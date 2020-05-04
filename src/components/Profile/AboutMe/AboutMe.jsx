import React from 'react'
import s from './AboutMe.module.scss'

function AboutMe() {
    return (
    <div className={s.person}>
    <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png"></img>
        <div className={s.personInfo}>
          <p>
            Konstantin Zverev <br></br> <br></br>
            Date of birth: 10.08.1994 <br></br>
            City: Smolensk <br></br>
            Language: russian <br></br>
            Married: no <br></br>
          </p>
        </div>
        </div>
    )
}

export default AboutMe