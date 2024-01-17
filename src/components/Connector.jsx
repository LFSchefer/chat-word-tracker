import * as React from 'react';
import './Connector.css';
import Livechat from './Livechat';
const tmi = require('tmi.js');

export default function Connector(props) {


  const [chanelName, setChanelName] = React.useState('mistermv');
  const [messages, setMessages] = React.useState([]);
  const [isConnected, setIsConnected] = React.useState(false)

  const twitchChannel = (event) => {
    setChanelName(event)
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
      setMessages(prev => [...prev, {chanel: chanelName , user: tags['display-name'], message: message, userColor: tags['color']}])
    });

    setIsConnected(true);

  }

  if (messages.length > 200) {
    setMessages(prev => prev.slice(1))
  }

  console.log(messages[messages.length -1])

  const connectionBtn =
  <div className='connector'>
    <button className='btn-connect' onClick={connection} >Connect</button>
  </div>

  const chanel =
  <>
    <h5>Please enter the Twitch channel name:</h5>
    <input type="text" placeholder='mistermv' onChange={(event) => twitchChannel(event.target.value)}/>
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
