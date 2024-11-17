import React, { useEffect, useState } from 'react'
import './Nav.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faBell } from '@fortawesome/free-solid-svg-icons'; 

function Nav() {
  const [nav, setNav] = useState(false);
  // Show nav background on scroll
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 1) {
        setNav(true)
      } else setNav(false);
    });
    return () => {
      window.removeEventListener('scroll');
    }
  }, []);

  return (
    <nav className={`${nav && 'nav__background'}`}>
      <div className='nav__logo-container'>
        <img
          className='nav__logo' 
          src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
          alt='nav__logo'
        />
      </div>
      <div className='nav__list-container'>
        <ul>
          <li><a href='#'>Home</a></li>
          <li><a href='#'>Shows</a></li>
          <li><a href='#'>Movies</a></li>
          <li><a href='#'>New & Popular</a></li>
          <li><a href='#'>My Netflix</a></li>
        </ul>
      </div>
      <div className='nav__avatar-container'>
        <div className='nav__avatar--wrapper'>
          <FontAwesomeIcon className='nav__icon' icon={faMagnifyingGlass} />
          <a href='#' className='nav__kids-category'>Kids</a>
          <FontAwesomeIcon className='nav__icon' icon={faBell} />
          <img
            className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='nav__avatar'
          />
        </div>
      </div>
    </nav>
  )
}

export default Nav
