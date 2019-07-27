import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <NavLink to='/'>
        <h1>
          SPACE-OUT
        </h1>
      </NavLink>
      <img 
        className='header-menu-icon' 
        src='https://i1.wp.com/royalposthumus.com/images/white_menu_icon.png' alt='menu-icon' 
      />
    </header>
  )
}

export default Header;