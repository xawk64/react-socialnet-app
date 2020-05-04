import React from 'react'
import s from './Dialogs.module.scss'
import DialogsArea from './DialogsArea/DialogsArea'
import Messages from './Messages/Messages'

function Dialogs(props) {
  return (
    <content className={s.dialogs}>
      <DialogsArea dialogs={props.dialogsPage.dialogs}/>
      <Messages messages={props.dialogsPage.messages}/>
    </content>
  );
}

export default Dialogs