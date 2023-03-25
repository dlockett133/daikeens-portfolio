import React from 'react';
import '../styles/Footer.css';
import { Twitter } from '@material-ui/icons';
import { LinkedIn } from '@material-ui/icons';
import { GitHub } from '@material-ui/icons';
import { Email } from '@material-ui/icons';

function Footer() {
  return (
    <div className='footer'>
            <div>
                <Twitter />
                <LinkedIn />
                <GitHub />
                <Email />
            </div>
           <p> &copy; 2023 Daikeen Lockett </p>                 
    </div>
  )
}

export default Footer