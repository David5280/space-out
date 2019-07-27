import React from 'react';
import { NavLink } from 'react-router-dom';

const PlanetCutout = ({ cutout, title }) => {
  return (
    <article className={`single-article ${title}-cutout`}>
      <NavLink to={`${title}`} >
        <img 
          src={cutout} 
          alt={title} 
          className='planet-home-image'
        />
      </NavLink>
    </article>
  )
}

export default PlanetCutout;