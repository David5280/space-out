import React from 'react';
import { Route } from 'react-router-dom';
import InfoContainer from '../InfoContainer/InfoContainer';

const MainDisplay = ({ planets }) => {
  const dataToDisplay = planets.map(planet => {
    return (
      <InfoContainer 
      description={planet.description}
      cutout={planet.cutout}
      key={planet.id}/>
    )
  })
  return (
    <section className='main-section-display'>
      {planets && <Route exact path='/' component={() => dataToDisplay} />}
    </section>
  )
}

export default MainDisplay;