import React from 'react'
import s from './DialogsArea.module.scss'
import DialogsItem from './DialogsItem/DialogsItem'

function DialogsArea(props) {

  let dialogsElements = props.dialogs.map( d => (<DialogsItem name={d.name} id={d.id} />))

  return (
    <div className={s.dialogsArea}>
      <ul>
      {dialogsElements}
      </ul>
    </div>
  );
}

export default DialogsArea