import * as React from 'react';
import './Livechat.css'

export default function Livechat(props) {

  const tchat = props.messages.map((message,index) => {
    return <li key={index} style={{'color':`${message.userColor}`}}>{message.user}: {message.message}</li>
  })

  return (
    <div className='chat-container'>
        <h5>Live tchat: {props.chanel}</h5>
        <ul>
          {tchat}
        </ul>
    </div>
  )
}
