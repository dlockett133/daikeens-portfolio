import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { projectList } from '../helpers/ProjectList';
import GitHubIcon from "@mui/icons-material/GitHub";
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const {id} = useParams();
    const project = projectList[id]
  return (
    <div className='project'>
        <h1>{project.name}</h1>
        <Link to={project.deployedLink} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={`A screenshot of the ${project.name} app`} />
        </Link>
        <p>
            <strong>Skills:</strong> {project.skills}
        </p>
       <Link to={project.repo} target="_blank" rel="noopener noreferrer"><GitHubIcon /></Link> 
    </div>
  )
}

export default ProjectDisplay