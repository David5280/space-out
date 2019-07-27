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
    </header>
  )
}

export default Header;