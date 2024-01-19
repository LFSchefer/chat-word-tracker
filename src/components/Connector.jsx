import * as React from 'react';
import './Connector.css';
import Livechat from './Livechat';
const tmi = require('tmi.js');

export default function Connector(props) {


  const [chanelName, setChanelName] = React.useState('mistermv');
  const [messages, setMessages] = React.useState([]);
  const [isConnected, setIsConnected] = React.useState(false);
  const [lastWinner , setLastWinner] = React.useState({})

  const twitchChannel = (event) => {
    setChanelName(event)
    setIsConnected(false)
    clearTchat()
  }

  const connection =() => {

    const opts = {
      channels: [
        `${chanelName}`
      ]
    };

    const client = new tmi.Client(opts);

    client.connect();

    client.on('message', (channel, tags, message, self) => {

      // console.log(`${tags['display-name']}: ${message}, color:${tags['color']}`);
      setMessages(prev => [...prev, {
        chanel: chanelName ,
        user: tags['display-name'],
        message: message,
        userColor: tags['color'],
        time: new Date().toLocaleString('fr-FR').split(' ')[1]
      }])
    });

    setIsConnected(true);

  }

  const clearTchat = () => {
    setMessages([])
  }

  React.useEffect(() => {
    if (messages.length > 200) {
      setMessages(prev => prev.slice(1))
    }

    if (messages.length > 0 && messages[messages.length -1].message === props.words) {
      if (lastWinner !== messages[messages.length -1]) {
        props.checkWinner(messages[messages.length -1])
        setLastWinner(messages[messages.length -1])
      }
    }
  },[messages, lastWinner, props])


  const disconnect = () => {
    window.location.reload(true);
    // window.history.pushState(null, null, window.location.href);
  }

  const connectionBtn =
  <div className='connector'>
    {isConnected ?
    <div>
      <button className='btn-connect' onClick={clearTchat} >Clear</button>
      <button onClick={disconnect}>Disconnect</button>
    </div>
    :
    <button className='btn-connect' onClick={connection} >Connect</button>
    }
  </div>

  const chanel =
  <>
    <h5>Twitch channel:</h5>
    <input type="text" placeholder='Ex: mistermv' onChange={(event) => twitchChannel(event.target.value)}/>
  </>

  const livechat = isConnected ?
  <Livechat chanel={chanelName} messages={messages}/> :
  <></>


  return (
    <div className='form-container'>
      {chanel}
      {connectionBtn}
      {livechat}
    </div>
  )
}
