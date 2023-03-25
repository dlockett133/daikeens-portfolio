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
      <div className='skills'>
        <h1>Skills</h1>
        <ul className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>ReactJS, HTML, CSS, NPM, BootStrap</span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>NodeJS, ExpressJS, MySQL, MongoDB</span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home