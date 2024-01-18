import * as React from 'react'
import "./WordTracker.css"
import NumberOfChat from './NumberOfChat'

export default function WordTracker(props) {

  const [wordToTrack, setWordToTrack] = React.useState('')

  const setWords = (event) => {
    setWordToTrack(event)
  }

  const wordTrackerForm =
  <div className='word-tracker-container'>
    <h5>Words to track:</h5>
    <input type="text" onChange={event => setWords(event.target.value)}/>
  </div>

  return (
    <>
    {wordTrackerForm}
    <NumberOfChat words={wordToTrack}/>
    </>
  )
}
