import * as React from 'react';
import './Methodinfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

export default function Methodinfo(props) {

  const enter = () => {
    console.log("enter")
  }

  const exit = () => {
    console.log("exit")
  }

  let exempleText = "";
  let explanation = "";
  let exempleGood = "";
  let exempleBad = "";

  switch (props.checker) {
    case "1":
      explanation = <p className='explanation'>Strick mode, exact match only.</p>
      exempleText = <p>Exemple: "Harry Poter"</p>
      exempleGood = <p className='good'>"Harry Poter"</p>
      exempleBad = <p className='bad'>"Harry poter", "HarryPoter", "Harri Poter"</p>
      break;
    case "2":
      explanation = <p className='explanation'>No capital mode, capitalize and none capitalize letters are the same.</p>
      exempleText = <p>Exemple: "Harry Poter"</p>
      exempleGood = <p className='good'>"Harry Poter", "harry poter"</p>
      exempleBad = <p className='bad'>"HarryPoter", "Harri Poter"</p>
      break;
    case "3":
      explanation = <p className='explanation'>No space mode, space do not count.</p>
      exempleText = <p>Exemple: "Harry Poter"</p>
      exempleGood = <p className='good'>"Harry Poter", "HarryPoter"</p>
      exempleBad = <p className='bad'>"Harry poter", "Harri Poter"</p>
      break;
    case "4":
      explanation = <p className='explanation'>No cap and space mode, Capitalize letter and space don't count.</p>
      exempleText = <p>Exemple: "Harry Poter"</p>
      exempleGood = <p className='good'>"Harry Poter", "harry poter", "HarryPoter"</p>
      exempleBad = <p className='bad'>"Harri Poter"</p>
      break;

    default:
      break;
  }

  const info = <div className='info-card card'>
    {explanation}
    {exempleText}
    {exempleGood}
    {exempleBad}
  </div>


  return (
    <div className='info'>
      <div className='method-info' onMouseEnter={enter} onMouseLeave={exit} >
        <FontAwesomeIcon icon={faInfo} />
      </div>
      {info}
    </div>
  )
}
