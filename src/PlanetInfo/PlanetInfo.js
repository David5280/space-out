import React from 'react';

const PlanetInfo = ({ planet }) => {
  console.log(planet.title)
  return (
    <section className='planet-info'>
      <h1>{planet.title}</h1>
    </section>
  )
}

export default PlanetInfo;