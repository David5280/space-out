import React from 'react'
import { NavLink, Link } from 'react-router-dom';

const Header = ({ planets }) => {
  const menuItems = planets.map(planet => {
    return (
      <NavLink to={`/${planet.title}`} key={planet.title}>{planet.title}</NavLink>
    )
  })
  return (
    <header>
      <Link to='/'>
        <h1>
          SPACE-OUT
        </h1>
      </Link>
      <div className='header-dropdown'>
        <img 
          className='header-menu-icon' 
          src='https://i1.wp.com/royalposthumus.com/images/white_menu_icon.png' alt='menu-icon' 
        />
        <div className='dropdown-content'>
          <NavLink exact to='/'>Home</NavLink>
          {menuItems}
          <NavLink to='/enter-stats'>Get Trip Info!</NavLink>
        </div>
      </div>
    </header>
  )
}

export default Header;