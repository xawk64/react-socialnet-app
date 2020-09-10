import React from 'react'
import s from './DialogsArea.module.scss'
import DialogsItem from './DialogsItem/DialogsItem'

function DialogsArea(props) {
  let dialogsElements = "No dialogs!"
  if (props.dialogs) {
  dialogsElements = props.dialogs
        .map( (d, i) => (<DialogsItem name={d} id={i} selectChat={props.selectChat} key={i}/>))
  }
  return (
    <div className={s.dialogsArea}>
      <ul>
      {dialogsElements}
      </ul>
    </div>
  );
}

export default DialogsArea