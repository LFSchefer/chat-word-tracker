import * as React from 'react'
import './Header.css'

export default function Header(props) {

  console.log(process.env.REACT_APP_VERSION);
  return (
    <header className='mb-4 header'>
      <h4>Twitch chat word tracker</h4>
      <p>v {process.env.REACT_APP_VERSION}</p>
    </header>
  )
}
