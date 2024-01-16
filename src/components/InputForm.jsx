import * as React from 'react';
import './InputForm.css';
import Connector from './Connector';

export default function InputForm(props) {

  const [chanelName, setChanelName] = React.useState('mistermv')

  const twitchChannel = (event) => {
    setChanelName(event)
  }



  const chanel =
  <div className='form-container'>
    <h5>Please enter the Twitch channel name:</h5>
    <input type="text" placeholder='mistermv' onChange={(event) => twitchChannel(event.target.value)}/>
  </div>

  // const inputChannel =
  // <>
  // <div className='number-of-chanel'>
  //   <select name="" onChange={e => numberOfTwitchChanel(e.target.value)} defaultValue={numberOfChanel}>
  //     <option value="1">1</option>
  //     <option value="2">2</option>
  //     <option value="3">3</option>
  //     <option value="4">4</option>
  //     <option value="5">5</option>
  //   </select>
  // </div>
  // {chanel}
  // </>


  return (
    <>
    {chanel}
    <Connector chanel={chanelName}/>
    </>
  )
}
