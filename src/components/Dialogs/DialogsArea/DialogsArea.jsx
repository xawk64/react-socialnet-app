import React from 'react'
import s from './DialogsArea.module.scss'

function DialogsArea(props) {
  return (
    <div className={s.dialogsArea}>
      <ul>
      {props.dialogsElements}
      </ul>
    </div>
  );
}

export default DialogsArea