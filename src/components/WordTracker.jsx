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
  const [multiRound, setMultiRound] = React.useState(false);
  const [score, setScore] = React.useState({});

  const handleOriginal = (event) => {
    setOriginalWord(event);
    setWinners([]);
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

    React.useEffect(()=> {
      setWinners([{user: 'toto', userColor: null, message: 'test', chanel:'test', time: 'test'}])
    },[])

  function addScore() {
    const scoreCandidate = JSON.parse(JSON.stringify(score));
    winners.forEach((winner, index)=> {

      switch (index) {
        case 0:
          if (scoreCandidate[winner.user] === undefined) {
            scoreCandidate[winner.user] = {
                score: 10,
                color: winner.userColor
              }
          }
          else {
            scoreCandidate[winner.user].score += 10;
          }
          break;
        case 1:
          if (scoreCandidate[winner.user] === undefined) {
            scoreCandidate[winner.user] = {
                score: 8,
                color: winner.userColor
              }
          }
          else {
            scoreCandidate[winner.user].score += 8;
          }
          break;
        case 2:
          if (scoreCandidate[winner.user] === undefined) {
            scoreCandidate[winner.user] = {
                score: 6,
                color: winner.userColor
              }
          }
          else {
            scoreCandidate[winner.user].score += 6;
          }
          break;
        case 3:
          if (scoreCandidate[winner.user] === undefined) {
            scoreCandidate[winner.user] = {
                score: 4,
                color: winner.userColor
              }
          }
          else {
            scoreCandidate[winner.user].score += 4;
          }
          break;
        case 4:
          if (scoreCandidate[winner.user] === undefined) {
            scoreCandidate[winner.user] = {
                score: 2,
                color: winner.userColor
              }
          }
          else {
            scoreCandidate[winner.user].score += 2;
          }
          break;

        default:
          break;
      }
    })
    setScore(scoreCandidate);
    setWinners([]);
    setOriginalWord('');
  }


  const clearScore = () => {
    setScore({});
  }

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
     {multiRound ? < Score score={score}/> : <></>}
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

  const btnMulti = multiRound ?
  <div className="d-flex w-50 justify-content-between">
    <div className="d-flex">

    <div className="btn mx-4" onClick={handleMulti}>Single round</div>
    <div className="btn mx-4" onClick={addScore}>Add score</div>
    </div>
    <div className="d-flex">

    <div className="btn" onClick={clearScore}>clear score</div>
    </div>
  </div>
  :
  <div className="btn" onClick={handleMulti}>Multi Round</div>;

  const wordTrackerForm =
  <div className='word-tracker-container mb-4'>
    <h5>Words to track:</h5>
    <div className='d-flex'>
    <input type="text" className='input-group-text' onChange={event => handleOriginal(event.target.value)} value={originalWord}/>
    {inputMethod}
    </div>
    <div className={multiRound ? "d-flex w-50 justify-content-between" : "d-flex justify-content-between"}>
    {winnersDisplay}
    {multiRoundDisplay}
    </div>
    {btnMulti}
  </div>

  return (
    <>
    {wordTrackerForm}
    <NumberOfChat words={wordToTrack} method={checker} checkWinner={checkWinner} />
    </>
  )
}
