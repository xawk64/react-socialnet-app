import React from 'react'
import preloader from '../../../assets/images/preloader.gif'
import s from './Preloader.module.scss'

const Preloader = () => {
    return <div className={s.preloaderContainer}>
        <img src={preloader}></img>
    </div>
}

export default Preloader