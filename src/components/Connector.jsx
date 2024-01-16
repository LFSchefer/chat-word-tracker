import * as React from 'react'
import './Connector.css'
const tmi = require('tmi.js');

export default function Connector(props) {


  const connection =() => {

    const opts = {
      // identity: {
      //   username: 'hutkelm',
      //   password: 'blls5xahp64zuuxz1ixuur43p1xrv0'

      //   // OLD: zww4nmfag15bx6o9u9opyiysnon9la
      //   // blls5xahp64zuuxz1ixuur43p1xrv0
      // },
      channels: [
        `${props.chanel}`
      ]

      // 'joss_bergia'
    };

    const client = new tmi.Client(opts);

    client.connect();

    client.on('message', (channel, tags, message, self) => {

      console.log(`${tags['display-name']}: ${message}`);
    });

  }


  return (
    <div className='connector'>
    <button className='btn-connect' onClick={connection} >Connect</button>
    </div>
  )
}
