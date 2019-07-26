import React from 'react';
import InfoContainer from '../InfoContainer/InfoContainer';

const MainDisplay = ({ planets }) => {
  const dataToDisplay = planets.map(planet => {
    return (
      <InfoContainer 
      description={planet.description}
      image={planet.image}
      key={planet.id}/>
    )
  })
  return (
    <section className='main-section-display'>
      {planets && dataToDisplay}
    </section>
  )
}

export default MainDisplay;