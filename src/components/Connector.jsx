import * as React from 'react'
import './Connector.css'
const tmi = require('tmi.js');

export default function Connector(props) {


  const [chanelName, setChanelName] = React.useState('mistermv')

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

      console.log(`${tags['display-name']}: ${message}`);
    });

  }

  const connectionBtn =
  <div className='connector'>
    <button className='btn-connect' onClick={connection} >Connect</button>
  </div>

  const chanel =
  <>
    <h5>Please enter the Twitch channel name:</h5>
    <input type="text" placeholder='mistermv' onChange={(event) => twitchChannel(event.target.value)}/>
  </>


  return (
    <div className='form-container'>
      {chanel}
      {connectionBtn}
    </div>
  )
}
