import React from 'react';
import { Route } from 'react-router-dom';
import InfoContainer from '../InfoContainer/InfoContainer';
import PlanetInfo from '../PlanetInfo/PlanetInfo';

const MainDisplay = ({ planets }) => {
  const dataToDisplay = planets.map(planet => {
    return (
      <InfoContainer 
      description={planet.description}
      cutout={planet.cutout}
      key={planet.id}/>
    )
  })
  const routes = planets.map(planet => {
    return (
      <Route exact path={`/${planet.title}`} render={() => <PlanetInfo planet={planet} />} />
    )
  })
  return (
    <section className='main-section-display'>
      {routes}
      {planets && <Route exact path='/all' component={() => dataToDisplay} />}
    </section>
  )
}

export default MainDisplay;