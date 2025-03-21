import React from 'react'
import Talk from './Talk'
import Production from './Production'
import '../css/Main.css'


function Main() {
  return (
    <div className='m_contents' id='home'>
      <div className='production'>
        <Talk></Talk>
        <Production></Production>
      </div>
    </div>
  )
}

export default Main
