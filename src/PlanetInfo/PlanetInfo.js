import React from 'react';

const PlanetInfo = ({ planet }) => {
  console.log(planet.title)
  return (
    <section className='planet-info'>
      <img src={planet.image} alt={`${planet.title}`} className='planet-info-image'/>
      <article className='planet-info-left-top'>
        <h2 className='planet-info-title planet-info-text'>{planet.title}</h2>
        <p className='planet-info-description planet-info-text'>{planet.description}</p>
      </article>
      <article className='planet-info-left-bottom'>
        <h3>Atmosphere</h3>
        <p>{planet.atmosphere}</p>
      </article>
    </section>
  )
}

export default PlanetInfo;