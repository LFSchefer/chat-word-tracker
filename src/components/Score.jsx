import * as React from 'react';
import "./Score.css";

export default function Score(props) {


  const test = Object.entries(props.score).sort((a,b)=>{return b[1].score-a[1].score})
  console.log(props.score)
  console.log(test)

  // const displayScore = props.score.map((score)=>{
  //   return <div>{score}</div>
  // })


  return (
    <div className="winners-container">
    <h5>Score:</h5>
    <div className="winners-list">
    </div>
  </div>
  )
}
