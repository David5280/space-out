import React from 'react';

const PlanetInfo = ({ planet }) => {
  console.log(planet.title)
  return (
    <section className='planet-info'>
      <img src={planet.image} alt={`${planet.title}`} className='planet-info-image'/>
      <h2 className='planet-info-title planet-info-text'>{planet.title}</h2>
      <p className='planet-info-description planet-info-text'>{planet.description}</p>
    </section>
  )
}

export default PlanetInfo;