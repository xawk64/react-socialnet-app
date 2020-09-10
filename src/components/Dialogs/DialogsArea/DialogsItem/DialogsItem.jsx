import React from 'react'
import s from './DialogsItem.module.scss'

function DialogsItem(props) {


  return (  
         <li className={s.dialogsItem} onClick={() => props.selectChat(props.id)}>
         <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png"></img>
           <p>{ props.name }</p>
         </li>
  );
}

export default DialogsItem