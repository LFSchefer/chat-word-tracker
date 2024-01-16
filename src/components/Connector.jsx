import * as React from 'react'
import './Connector.css'
const tmi = require('tmi.js');

export default function Connector(props) {


  const connection =() => {

    const opts = {
      identity: {
        username: 'hutkelm',
        password: 'zww4nmfag15bx6o9u9opyiysnon9la'
      },
      channels: [
        'joss_bergia'
      ]
    };

    const client = new tmi.Client(opts);

    client.connect();

    client.on('message', (channel, tags, message, self) => {
    
      console.log(`${tags['display-name']}: ${message}`);
    });

  }


  return (
    <>
    <button onClick={connection} >Connect</button>
    </>
  )
}
