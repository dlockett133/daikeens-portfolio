import React from 'react';
import { Link } from 'react-router-dom';
import { GitHub, LinkedIn, Email } from '@mui/icons-material/';
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
            I am passionate about technology and constantly seeking new challenges. 
            I love collaborating with others, video games, and supporting my Lakers (WOHOO!). 
            In my free time, if I am not stuck to a keyboard, I enjoy walking my dog, cooking, and going to the arcade. 
          </p>
          <Link to="https://www.linkedin.com/in/daikeen-lockett/" target="_blank" rel="noopener noreferrer"><LinkedIn /></Link>
          <a href="mailto: daikeen_lockett@yahoo.com"><Email /></a>
          <Link to="https://github.com/dlockett133" target="_blank" rel="noopener noreferrer"><GitHub /></Link>
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