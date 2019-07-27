import React from 'react';

const PlanetInfo = ({ planet }) => {
  console.log(planet.title)
  return (
    <section className='planet-info'>
      <img src={planet.image} alt={`${planet.title}`} className='planet-info-image'/>
      <article className='planet-info-top-left'>
        <h2 className='planet-info-title planet-info-text'>{planet.title}</h2>
        <p className='planet-info-description planet-info-text'>{planet.description}</p>
      </article>
      <article className='planet-info-bottom-left'>
        <h3>Atmosphere:</h3>
        <p>{planet.atmosphere}</p>
        <h3>Miles From the Sun:</h3>
        <p>{planet.milesFromSun}</p>
        <h3>Travel Time:</h3>
        <p>{planet.travelTime}</p>
        <h3>Gravity:</h3>
        <p>{planet.gravity} times Earth's Gravity</p>
        <h3>Number of Moons:</h3>
        <p>{planet.moons}</p>
        <h3>1 Year:</h3>
        <p>{planet.sunRevolution} Earth days.</p>
      </article>
      <article className='planet-info-top-right'>
        <h2 className='planet-info-title'>Climate:</h2>
        <p>{planet.climate}</p>
      </article>
    </section>
  )
}

export default PlanetInfo;