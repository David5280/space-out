import React from 'react';
import Header from '../../components/Header/Header';
import MainDisplay from '../MainDisplay/MainDisplay';
import LoadingDisplay from '../../components/LoadingDisplay/LoadingDisplay';
import ErrorPage from '../../components/ErrorPage/ErrorPage';
import PropTypes from 'prop-types';
import { loadPlanets, loadComplete, hasErrored } from '../../actions';
import { getData } from '../../Utilz/apiCalls';
import { connect } from 'react-redux';
import '../../SASS/Index.scss';

export class App extends React.Component {
  componentDidMount() {
    this.retrieveData()
  }

  retrieveData = () => {
    const { loadPlanets, loadComplete, hasErrored } = this.props;
    try {
      getData()
      .then(data => loadPlanets(data))
      .then(() => loadComplete())
      .catch(error => hasErrored(error.message))
    } catch ({ message }) {
      hasErrored(message)
    }
  };

  render() {
    const { planets, loading, error } = this.props;
    return (
      <div className='App'>
        <Header planets={planets}/>
        {error && <ErrorPage message={error}/>}
        {loading && !error && <LoadingDisplay />}
        {planets && <MainDisplay planets={planets} />}
      </div>
    )
  }
};

export const mapStateToProps = (state) => ({
  planets:  state.planets,
  loading: state.loading,
  error: state.error
});

export const mapDispatchToProps = (dispatch) => ({
  loadPlanets: (planets) => dispatch(loadPlanets(planets)),
  loadComplete: () => dispatch(loadComplete()),
  hasErrored: (errorMsg) => dispatch(hasErrored(errorMsg))
});

App.propTypes = {
  planets: PropTypes.array,
  loading: PropTypes.bool,
  error: PropTypes.string,
  loadPlanets: PropTypes.func,
  loadComplete: PropTypes.func,
  hasErrored: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
