import React from 'react'
import s from './DialogsItem.module.scss'
import { NavLink } from 'react-router-dom'

function DialogsItem(props) {
  return (  
       <NavLink to={`/dialogs/${ props.id }`} className={s.dialogsItem}>
         <li>
         <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png"></img>
           <p>{ props.name }</p>
         </li>
         </NavLink>  
  );
}

export default DialogsItem