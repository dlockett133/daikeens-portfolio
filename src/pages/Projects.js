import React from 'react'
import ProjectItem from '../components/ProjectItem';
import Project1 from '../assets/images/WeatherMann-screenshot.png';
import Project2 from '../assets/images/weatherOrNot-screenshot.png';
import Project3 from '../assets/images/digital.jpeg';
import Project4 from '../assets/images/cyber-bg.webp';
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        <ProjectItem name="WeatherMann" image={Project1}/>
        <ProjectItem name="weatherOrNot" image={Project2}/>
        <ProjectItem name="Project 3" image={Project3}/>
        <ProjectItem name="Project 4" image={Project4}/>
      </div>
    </div>
  )
}

export default Projects