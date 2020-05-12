import React from 'react'
import DialogsItem from './DialogsItem/DialogsItem'
import DialogsArea from './DialogsArea'
import { selectDialogActionCreater } from '../../../redux/dialogs-reducer'

function DialogsAreaContainer(props) {

  const selectDialog = (id) => {
    let action = selectDialogActionCreater (id)
    props.store.dispatch(action)
  }

  let state = props.store.getState().dialogsPage
  let dialogsElements = state.dialogsObject.dialogs
  .map( d => (<DialogsItem name={d.name} id={d.id} selectDialog={selectDialog}/>))

  return (
    <DialogsArea dialogsElements={dialogsElements}/>
  )
}

export default DialogsAreaContainer