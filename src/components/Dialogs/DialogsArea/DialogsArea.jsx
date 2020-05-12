import React from 'react'
import s from './DialogsArea.module.scss'
import DialogsItem from './DialogsItem/DialogsItem'

function DialogsArea(props) {

  let dialogsElements = props.dialogsObject.dialogs.map( d => (<DialogsItem name={d.name} id={d.id} dispatch={props.dispatch}/>))

  return (
    <div className={s.dialogsArea}>
      <ul>
      {dialogsElements}
      </ul>
    </div>
  );
}

export default DialogsArea