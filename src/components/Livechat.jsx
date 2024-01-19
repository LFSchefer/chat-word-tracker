import * as React from 'react';
import './Livechat.css'

export default function Livechat(props) {

  const tchat = props.messages.map((message,index) => {
    return <div key={index} className='tchat-message'><p style={{'color':`${message.userColor === null ? '#FF7F50' : message.userColor }`}}>{message.user}:</p> <p className='message-content'>{message.message}</p></div>
  })

  React.useEffect(()=> {
      let objDiv = document.querySelector(`.feed${props.chanel}`);
      objDiv.scrollTop = objDiv.scrollHeight;
  },[props.chanel, props.messages])

  let className = `feed feed${props.chanel}`

  return (
    <div className='chat-container'>
        <h5>Live tchat: {props.chanel}</h5>
        <div className={className}>
          {tchat}
        </div>
    </div>
  )
}
