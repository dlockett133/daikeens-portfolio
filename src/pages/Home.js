import React from 'react';
import { GitHub, LinkedIn, Email } from '@material-ui/icons';
import portrait from '../assets/images/my-headshot.jpg';

import '../styles/Home.css';

function Home() {
  return (
    <div className='home'>
      <div className='about'>
        <img className='portrait' src={portrait} alt="Portrait of Daikeen Lockett"/>
        <h2> Hello World. My Name is Daikeen Lockett</h2>
        <div className='prompt'>
          <p>As a Georgia State University graduate and software engineer, 
            I am passionate about technology and constantly seek new challenges. 
            I enjoy collaborating with others, love video games, and support the Lakers. 
            In my free time, I walk my dog, cook, and go to the arcade. 
            I am dedicated to my craft and strive for innovation in software engineering.</p>
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