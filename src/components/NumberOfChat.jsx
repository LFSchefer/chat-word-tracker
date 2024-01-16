import * as React from 'react'
import './NumberOfChat.css'

export default function NumberOfChat(props) {

  const [numberOfChanel, setNumberOFChanel] = React.useState([1])

  console.log(numberOfChanel)

  const numberOfTwitchChanel = (event) => {
    let array = []
    for (let index = 0; index < event; index++) {
      array.push(index + 1)
    }
    setNumberOFChanel(array)
  }

  const inputSelect =
  <div className='number-of-chanel'>
  <select name="" onChange={e => numberOfTwitchChanel(e.target.value)} defaultValue={numberOfChanel[0]}>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
  </div>

  const test = numberOfChanel.map((num,index) => {
    return <p>{num}</p>
  })



  return (
    <>
    {inputSelect}
    <div className='connector-container'>
      {test}
    </div>
    </>
  )
}
