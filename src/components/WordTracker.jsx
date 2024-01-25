import * as React from 'react'
import "./WordTracker.css"
import NumberOfChat from './NumberOfChat'

export default function WordTracker(props) {

  const [wordToTrack, setWordToTrack] = React.useState('');
  const [winners, setWinners] = React.useState([]);

  const setWords = (event) => {
    setWordToTrack(event.toLowerCase().replaceAll(' ',''))
    setWinners([])
  }

  const checkWinner = (object) => {
    setWinners(prev => [...prev, object])
  }

  // console.log(wordToTrack)

  const winnerList = winners.length > 0 ?
   winners.map((winner,index)=> {
    return <div className="winner" key={index}>
      <div className='winner-first-line'>
        <p>{index + 1}:</p><p style={{'color':`${winner.userColor === null ? '#FF7F50' : winner.userColor }`}}>{winner.user}</p><p>at:</p><p>{winner.time}</p>
      </div>
      <div className='winner-seconde-line'>
        <p>chanel:</p><p>{winner.chanel}</p>
      </div>
      <div className='winner-third-line'>
        <p>message:</p><p>{winner.message}</p>
      </div>
      </div>
   }):
   null ;

  const winnersDisplay =
  <div className="winners-container">
    <h5>Winners:</h5>
    <div className="winners-list">
      {winnerList}
    </div>
  </div>

  const wordTrackerForm =
  <div className='word-tracker-container'>
    <h5>Words to track:</h5>
    <input type="text" onChange={event => setWords(event.target.value)}/>
    {winnersDisplay}
  </div>

  return (
    <>
    {wordTrackerForm}
    <NumberOfChat words={wordToTrack} checkWinner={checkWinner} />
    </>
  )
}
