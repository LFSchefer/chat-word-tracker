import * as React from 'react';
import './Livechat.css'

export default function Livechat(props) {

  const tchat = props.messages.map((message,index) => {
    return <div key={index}><p style={{'color':`${message.userColor === null ? '#FF7F50' : message.userColor }`}}>{message.user}:</p> <p>{message.message}</p></div>
  })


  React.useEffect(()=> {
      let objDiv = document.querySelector(".feed");
      objDiv.scrollTop = objDiv.scrollHeight;
  },[props.messages])

  return (
    <div className='chat-container'>
        <h5>Live tchat: {props.chanel}</h5>
        <div className="feed">
          {tchat}
        </div>
    </div>
  )
}
