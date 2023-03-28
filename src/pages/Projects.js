import React from 'react'
import ProjectItem from '../components/ProjectItem';
import {projectList} from '../helpers/ProjectList.js'
import '../styles/Projects.css';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
        {projectList.map((project, i) => {
          return <ProjectItem id={i} name={project.name} image={project.image}/>
        })}
      </div>
    </div>
  )
}

export default Projects