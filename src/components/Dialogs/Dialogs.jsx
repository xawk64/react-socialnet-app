import React from 'react'
import s from './Dialogs.module.scss'
import DialogsAreaContainer from './DialogsArea/DialogsAreaContainer'
import MessagesContainer from './Messages/MessagesContainer'

function Dialogs(props) {
  return (
    <content className={s.dialogs}>
      <DialogsAreaContainer />
      <MessagesContainer />
    </content>
  );
}

export default Dialogs