import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';
import { Twitter } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Email } from '@material-ui/icons';

function Footer() {
  return (
    <div className='footer'>
            <div className='socialMedia'>
                <Link to="https://twitter.com/Lupnthe3rdDay" target="_blank" rel="noopener noreferrer"><Twitter /></Link>
                <Link to="https://www.linkedin.com/in/daikeen-lockett/" target="_blank" rel="noopener noreferrer"><LinkedIn /></Link>
                <Link to="https://github.com/dlockett133" target="_blank" rel="noopener noreferrer"><GitHub /></Link>
                <a href="mailto: daikeen_lockett@yahoo.com"><Email /></a>
            </div>
           <p> &copy; 2023 Daikeen Lockett </p>                 
    </div>
  )
}

export default Footer