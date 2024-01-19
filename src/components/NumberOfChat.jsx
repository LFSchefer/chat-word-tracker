import * as React from 'react'
import './NumberOfChat.css'
import Connector from './Connector'

export default function NumberOfChat(props) {

  const [numberOfChanel, setNumberOFChanel] = React.useState([1])

  const numberOfTwitchChanel = (event) => {
    let array = []
    for (let index = 0; index < event; index++) {
      array.push(index + 1)
    }
    setNumberOFChanel(array)
  }

  const inputSelect =
  <div className='number-of-chanel'>
    <p>Please enter the number of Twitch chat you want to track</p>
    <select name="" onChange={e => numberOfTwitchChanel(e.target.value)} defaultValue={numberOfChanel[0]}>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </select>
  </div>

  const connectors = numberOfChanel.map((num,index) => {
    return <Connector key={index} words={props.words} checkWinner={props.checkWinner} winners={props.winners}/>
  })

  // console.log(props.words)

  return (
    <>
      {inputSelect}
      <div className='connector-container'>
        {connectors}
      </div>
    </>
  )
}
