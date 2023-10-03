import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';//use to navigate to other parts of our page
import {styles} from '../styles';
import {navLinks} from '../constants';
import {logo, menu, close} from '../assets';
import { GitHub, LinkedIn, Twitter } from '@mui/icons-material';

import resume from '../assets/resume.pdf'

const openResume = () => {
  window.open(resume);
};

const Navbar = () => {
  const [active, setActive] = useState("")
  const [toggle, setToggle] = useState(false)
  const [showTwitter, setShowTwitter] = useState(false)
  
  return (
    <nav 
    id='nav'
    className={`
    ${styles.paddingX} 
    w-full
    flex
    items-center
    py-5 
    fixed 
    top-0 
    z-20
     bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link 
          to={'#nav'}
          className='flex items-center gap-2'
          onClick={() => {
            setActive("")
            window.scrollTo(0,0);
          }}
        >
          <img src={logo} alt='Logo' className='w-9 h-9 object-contain bg-white rounded-[20px]'/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex'>
            Daikeen &nbsp;
            <span className='sm:block hidden'> | Software Engineer </span>
          </p>
        </Link>
        <div className='sm:flex flex-row gap-5'>
          <Link to="https://github.com/dlockett133" target="_blank" rel="noopener noreferrer">
            <button>
              <GitHub fontSize='large'/> 
            </button>
          </Link>

          <Link to="https://www.linkedin.com/in/daikeen-lockett/" target="_blank" rel="noopener noreferrer">
            <button>
              <LinkedIn fontSize='large'/>
            </button>
          </Link>

          { showTwitter && <Link to="https://twitter.com/Lupnthe3rdDay" target="_blank" rel="noopener noreferrer">
            <button>
              <Twitter fontSize='large'/>
            </button>
          </Link>}

        </div>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => 
            <li 
              key={link.id} 
              className={`${
                active === link.title
                ? "text-white"
                : "text-secondary"
              } hover:text-white text-[18px]
              font-medium cursor-pointer`}
              onClick={() => {
                setActive(link.title)
                if (link.title === "Resume") {
                  openResume()
                  }
                }
              }
              >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          )}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img 
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />
          <div className={`${!toggle ? 'hidden' : 'flex'} p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navLinks.map((link) => 
              <li 
                key={link.id} 
                className={`${
                  active === link.title
                  ? "text-white"
                  : "text-secondary"
                } font-poppins font-medium cursor-pointer text-[16px]`}
                onClick={() => {
                  setToggle(!toggle)
                  setActive(link.title);
                }}
                >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
              )}
            </ul>
        </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar