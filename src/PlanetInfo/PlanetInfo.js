import React from 'react';

const PlanetInfo = ({ planet }) => {
  console.log(planet.title)
  return (
    <section className='planet-info'>
      <img src={planet.image} alt={`${planet.title}`} className='planet-info-image'/>
      <h2>{planet.title}</h2>
    </section>
  )
}

export default PlanetInfo;