import React from 'react';
import { Route } from 'react-router-dom';
import PlanetCutout from '../PlanetCutout/PlanetCutout';
import PlanetInfo from '../PlanetInfo/PlanetInfo';

const MainDisplay = ({ planets }) => {
  const dataToDisplay = planets.map(planet => {
    return (
      <PlanetCutout 
        title={planet.title}
        cutout={planet.cutout}
        key={planet.key}
      />
    )
  });
  const routes = planets.map(planet => {
    return (
      <Route 
        exact path={`/${planet.title}`} 
        render={() => <PlanetInfo planet={planet}
        />
      } key={planet.key}
      />
    )
  });
  return (
    <section className='main-section-display'>
    {routes}
    {planets && <Route exact path='/' render={() => dataToDisplay} />}
    </section>
  )
};

export default MainDisplay;