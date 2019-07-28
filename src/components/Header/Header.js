import React from 'react'
import { NavLink } from 'react-router-dom';

const Header = ({ planets }) => {
  const menuItems = planets.map(planet => {
    return (
      <NavLink to={`/${planet.title}`} key={planet.id}>{planet.title}</NavLink>
    )
  })
  return (
    <header>
      <NavLink to='/'>
        <h1>
          SPACE-OUT
        </h1>
      </NavLink>
      <div className='header-dropdown'>
        <img 
          className='header-menu-icon' 
          src='https://i1.wp.com/royalposthumus.com/images/white_menu_icon.png' alt='menu-icon' 
        />
        <div className='dropdown-content'>
          <NavLink to='/'>Home</NavLink>
          {menuItems}
        </div>
      </div>
    </header>
  )
}

export default Header;