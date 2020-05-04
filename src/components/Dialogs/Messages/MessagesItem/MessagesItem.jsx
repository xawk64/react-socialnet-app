import React from 'react'
import s from './MessagesItem.module.scss'

function MessagesItem(props) {
  return (
     <li>
       <h3>{props.author}</h3>
        <p>{props.mess}</p>
     </li>
  );
}

export default MessagesItem