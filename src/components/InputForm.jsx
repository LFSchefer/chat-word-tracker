import * as React from 'react';
import './InputForm.css';
import Connector from './Connector';

export default function InputForm(props) {

  const [chanelName, setChanelName] = React.useState('mistermv')

  const twitchChannel = (event) => {
    setChanelName(event)
  }

  const inputChannel = <div className='form-container'>
    <h5>Please enter the Twitch channel name:</h5>
    <input type="text" placeholder='mistermv' onChange={(event) => twitchChannel(event.target.value)}/>
  </div>


  return (
    <>
    {inputChannel}
    <Connector chanel={chanelName}/>
    </>
  )
}
