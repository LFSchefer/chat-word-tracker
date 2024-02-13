import * as React from 'react';
import "./WordTracker.css";
import NumberOfChat from './NumberOfChat';
import Methodinfo from './Methodinfo';
import Score from './Score';


export default function WordTracker(props) {

  const [wordToTrack, setWordToTrack] = React.useState('');
  const [winners, setWinners] = React.useState([]);
  const [checker , setChecker] = React.useState('1');
  const [originalWord, setOriginalWord] = React.useState('');
  const [multiRound, setMultiRound] = React.useState(false)

  const handleOriginal = (event) => {
    setOriginalWord(event)
    setWinners([])
  }

  React.useEffect(()=> {
      switch (checker) {
        case  '1':
          setWordToTrack(originalWord)
          break;
        case  '2':
          setWordToTrack(originalWord.toLowerCase())
          break;
        case  '3':
          setWordToTrack(originalWord.replaceAll(' ',''))
          break;
        case  '4':
          setWordToTrack(originalWord.toLowerCase().replaceAll(' ',''))
          break;
        default:
          break;
    }

  },[originalWord,checker])


  const checkWinner = (object) => {
    setWinners(prev => [...prev, object])
  }

  const checkMethod = (event) => {
    setChecker(event)
    }

    const handleMulti = () => {
      setMultiRound(prev => !prev)
    }

  // console.log(multiRound)

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

   const multiRoundDisplay =
   <div className="multi-round">
     {multiRound ? < Score/> : <></>}
   </div>

  const winnersDisplay =
  <div className="winners-container">
    <h5>{multiRound ? "Round" : "Winners"}:</h5>
    <div className="winners-list">
      {winnerList}
    </div>
  </div>

  const inputMethod =
  <div className='check-method mx-4'>
    <p>Method: </p>
    <select className='form-select' name="" onChange={e => checkMethod(e.target.value)} defaultValue={checker}>
      <option value="1">Strict</option>
      <option value="2">No Cap</option>
      <option value="3">No Space</option>
      <option value="4">No Cap/Space</option>
    </select>
    < Methodinfo checker={checker}/>
  </div>


  const wordTrackerForm =
  <div className='word-tracker-container'>
    <h5>Words to track:</h5>
    <div className='d-flex'>
    <input type="text" className='input-group-text' onChange={event => handleOriginal(event.target.value)}/>
    {inputMethod}
    </div>
    <div className="d-flex w-50 justify-content-between">
    {winnersDisplay}
    {multiRoundDisplay}
    </div>
    <div className="btn" onClick={handleMulti}>{multiRound ? "Single round" : "Multi Round"}</div>

  </div>

  return (
    <>
    {wordTrackerForm}
    <NumberOfChat words={wordToTrack} method={checker} checkWinner={checkWinner} />
    </>
  )
}
