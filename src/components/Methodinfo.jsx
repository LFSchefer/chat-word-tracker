import * as React from 'react';
import './Methodinfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfo } from '@fortawesome/free-solid-svg-icons';

export default function Methodinfo(props) {

  const infoText = <p>test</p>

  const info = <div className='info-card'>
    {infoText}
  </div>


  return (
    <div className='info'>
      <div className='method-info'>
        <FontAwesomeIcon icon={faInfo} />
      </div>
      {info}
    </div>
  )
}
