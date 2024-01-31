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
        <h5>{index + 1}:</h5><p style={{'color':`${winner.userColor === null ? '#FF7F50' : winner.userColor }`}}>{winner.user}</p><h5>at:</h5><p>{winner.time}</p>
      </div>
      <div className='winner-seconde-line'>
        <h5>chanel:</h5><p>{winner.chanel}</p>
      </div>
      <div className='winner-third-line'>
        <h5>message:</h5><p>{winner.message}</p>
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
    <input type="text" className='input-group-text' onChange={event => setWords(event.target.value)}/>
    {winnersDisplay}
  </div>

  return (
    <>
    {wordTrackerForm}
    <NumberOfChat words={wordToTrack} checkWinner={checkWinner} />
    </>
  )
}
