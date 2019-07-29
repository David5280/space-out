import React from 'react';
import PlanetCutout from '../../components/PlanetCutout/PlanetCutout';
import PlanetInfo from '../../components/PlanetInfo/PlanetInfo';
import UserStats from '../../components/UserStats/UserStats';
import StatsForm from '../StatsForm/StatsForm';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export const MainDisplay = ({ planets, user }) => {
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
      <div key={planet.title}>
        <Route 
          exact path={`/${planet.title}`} 
          render={() => <PlanetInfo planet={planet}
        />
        } 
        />
        <Route 
          exact path={`/stats/${planet.title}`} 
          render={() => <UserStats planet={planet} user={user}
        />
        } 
        />
      </div>
    )
  });
  const statsForm = () => {
    return <StatsForm />
  };
  return (
    <main className='main-section-display'>
    {routes}
    {planets && <Route exact path='/' render={() => dataToDisplay} />}
    <Route exact path='/enter-stats' component={statsForm} />
    </main>
  )
};

const mapStateToProps = (state) => ({
  user: state.user
});

MainDisplay.propTypes = {
  planets: PropTypes.array
}

export default connect(mapStateToProps)(MainDisplay);