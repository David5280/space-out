import React from 'react';
import { getData } from '../../Utilz/apiCalls';
import { loadPlanets, loadComplete } from '../../actions';
import Header from '../../components/Header/Header';
import MainDisplay from '../../components/MainDisplay/MainDisplay';
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
        <Header />
        {this.props.loading && <h2>LOADING</h2>}
        {this.props.planets &&
        <main>
          <MainDisplay planets={this.props.planets} />
        </main>}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  planets:  state.planets,
  loading: state.loading
});

export const mapDispatchToProps = (dispatch) => ({
  loadPlanets: (planets) => dispatch(loadPlanets(planets)),
  loadComplete: () => dispatch(loadComplete())
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
