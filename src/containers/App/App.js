import React from 'react';
import Header from '../../components/Header/Header';
import MainDisplay from '../MainDisplay/MainDisplay';
import LoadingDisplay from '../../components/LoadingDisplay/LoadingDisplay';
import PropTypes from 'prop-types';
import { loadPlanets, loadComplete } from '../../actions';
import { getData } from '../../Utilz/apiCalls';
import { connect } from 'react-redux';
import '../../SASS/Index.scss';

export class App extends React.Component {
  componentDidMount() {
    this.retrieveData()
  }

  retrieveData = () => {
    const { loadPlanets, loadComplete } = this.props;
    getData()
    .then(data => loadPlanets(data))
    .then(() => loadComplete())
    .catch(error => error.message)
  }

  render() {
    return (
      <div className="App">
        <Header planets={this.props.planets}/>
        {this.props.loading && <LoadingDisplay />}
        {this.props.planets && <MainDisplay planets={this.props.planets} />}
      </div>
    )
  }
};

export const mapStateToProps = (state) => ({
  planets:  state.planets,
  loading: state.loading
});

export const mapDispatchToProps = (dispatch) => ({
  loadPlanets: (planets) => dispatch(loadPlanets(planets)),
  loadComplete: () => dispatch(loadComplete())
});

App.propTypes = {
  planets: PropTypes.array,
  loading: PropTypes.bool,
  loadPlanets: PropTypes.func,
  loadComplete: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
