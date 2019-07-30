import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';


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
};

PlanetCutout.propTypes = {
  cutout: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

export default PlanetCutout;