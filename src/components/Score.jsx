import * as React from 'react';
import "./Score.css";

export default function Score(props) {

  console.log(props.score)

  const displayScore = props.score.map((score)=>{
    return <div>{score}</div>
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
