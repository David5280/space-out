import React from 'react';
import { Route } from 'react-router-dom';
import PlanetCutout from '../PlanetCutout/PlanetCutout';
import PlanetInfo from '../PlanetInfo/PlanetInfo';
import StatsForm from '../../containers/StatsForm/StatsForm';
import PropTypes from 'prop-types';

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
  const statsForm = () => {
    return <StatsForm />
  }
  return (
    <main className='main-section-display'>
    {routes}
    <Route exact path='/enter-stats' component={statsForm} />
    {planets && <Route exact path='/' render={() => dataToDisplay} />}
    </main>
  )
};

MainDisplay.propTypes = {
  planets: PropTypes.array
}

export default MainDisplay;