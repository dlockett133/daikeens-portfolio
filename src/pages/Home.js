import React from 'react'
import { GitHub, LinkedIn, Email } from '@material-ui/icons';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <h2> Hello World. My Name is Daikeen Lockett</h2>
        <div className='prompt'>
          <p>Input details about me here!</p>
          <LinkedIn/>
          <Email/>
          <GitHub/>
        </div>
      </div>
      <div className='skills'></div>
    </div>
  )
}

export default Home