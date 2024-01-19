import * as React from 'react'
import "./WordTracker.css"
import NumberOfChat from './NumberOfChat'

export default function WordTracker(props) {

  const [wordToTrack, setWordToTrack] = React.useState('');
  const [winners, setWinners] = React.useState([]);

  const setWords = (event) => {
    setWordToTrack(event)
    setWinners([])
  }

  const checkWinner = (object) => {
    // console.log(object)

    setWinners(prev => [...prev, object])

    if (winners[winners.length -1] === winners[winners.length -2]) {
      setWinners(prev => prev[winners.length - 1])
    }


    // if (winners.length === 0) {
    //   setWinners(prev => [...prev, object])
    // }
    // else if (winners.length > 0 && winners[winners.length -1] !== object) {
    //   console.log('in condition')
    //   setWinners(prev => [...prev, object])
    // }
  }

  // function checkWinner(object) {
  //   console.log(object)
  //   for (let index = 0; index < 1; index++) {
  //     setWinners(prev => [...prev, object])
  //   }
  // }

  console.log(winners)

  const wordTrackerForm =
  <div className='word-tracker-container'>
    <h5>Words to track:</h5>
    <input type="text" onChange={event => setWords(event.target.value)}/>
  </div>

  return (
    <>
    {wordTrackerForm}
    <NumberOfChat words={wordToTrack} checkWinner={checkWinner} winners={winners}/>
    </>
  )
}
