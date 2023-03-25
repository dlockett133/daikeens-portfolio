import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@material-ui/icons/Reorder'

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);

    const navbarState = () => setExpandNavbar(!expandNavbar);

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button> 
                <ReorderIcon onClick={()=> navbarState()}/> 
            </button>
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