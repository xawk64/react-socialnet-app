import React from 'react'
import s from './DialogsItem.module.scss'

function DialogsItem(props) {

  const selectDialog = () => {
    props.selectDialog(props.id)
  }

  return (  
         <li className={s.dialogsItem} onClick={selectDialog}>
         <img src="https://cdn.iconscout.com/icon/free/png-512/avatar-380-456332.png"></img>
           <p>{ props.name }</p>
         </li>
  );
}

export default DialogsItem