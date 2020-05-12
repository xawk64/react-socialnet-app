import React from 'react'
import s from './Dialogs.module.scss'
import DialogsArea from './DialogsArea/DialogsArea'
import Messages from './Messages/Messages'

function Dialogs(props) {
  return (
    <content className={s.dialogs}>
      <DialogsArea dialogsObject={props.dialogsPage.dialogsObject}
      dispatch={props.dispatch}
      />
      <Messages messagesObject={props.dialogsPage.messagesObject} 
      dialogsObject={props.dialogsPage.dialogsObject} 
      dispatch={props.dispatch}
      />
    </content>
  );
}

export default Dialogs