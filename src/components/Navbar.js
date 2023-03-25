import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <div className='toggleButton'>
            <button></button>
        </div>
        <div className='links'>
            {/* Using Link element from 'react-router-dom', you pass a prop call 'to' that you give the route you want the link to go to */}
            <Link to="/">Home</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar