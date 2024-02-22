import * as React from 'react';
import "./Score.css";

export default function Score(props) {


  const sortArray = Object.entries(props.score).sort((a,b)=>{return b[1].score-a[1].score})
  // console.log(props.score)
  // console.table(sortArray)

  const displayScore = sortArray.map((score,index)=>{
    return <div key={index} className='d-flex justify-content-between mx-1 p-2 winner'>
      <p>{index + 1}:</p>
      <p style={{'color': `${score[1].color === undefined ? '#FF7F50' : score[1].color }`}}>{score[0]}</p>
      <p>{score[1].score} points</p>
      </div>
  })

  return (
    <div className="winners-container">
    <h5>Score:</h5>
    <div className="winners-list">
      {displayScore}
    </div>
  </div>

  )
}
