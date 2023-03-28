import React, { useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';
import '../styles/Navbar.css';
import ReorderIcon from '@mui/icons-material/Reorder';

function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
    // logic to make button appear 
    const navbarState = () => setExpandNavbar(!expandNavbar);

    // returns the location for the current route/page
    const location = useLocation();

    // changes the state of the navbar to false each time the location variable is updated
    useEffect(() => {
        setExpandNavbar(false);
    }, [location])

  return (
    <div className='navbar' id={expandNavbar ? "open" : "close"}>
        <div className='toggleButton'>
            <button> 
                <ReorderIcon onClick={()=> navbarState()}/> 
            </button>
        </div>
        <div className='links'>
            {/* Using Link element from 'react-router-dom', you pass a prop call 'to' that you give the route you want the link to go to */}
            <Link to="/daikeens-portfolio/">Home</Link>
            <Link to="/daikeens-portfolio/projects">Projects</Link>
            <Link to="/daikeens-portfolio/experience">Experience</Link>
        </div>
    </div>
  )
}

export default Navbar