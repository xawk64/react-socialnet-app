import React from 'react'
import s from './DialogsItem.module.scss'
import { NavLink } from 'react-router-dom'
import { selectDialogActionCreater } from '../../../../redux/dialogs-reducer'



function DialogsItem(props) {
  const selectDialog = () => {
    let id = props.id
    let action = selectDialogActionCreater (id)
    props.dispatch(action)
  }

  return (  
         <li className={s.dialogsItem} onClick={selectDialog}>
         <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png"></img>
           <p>{ props.name }</p>
         </li>
  );
}

export default DialogsItem