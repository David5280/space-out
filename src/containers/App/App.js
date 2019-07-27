import React from 'react';
import { getData } from '../../Utilz/apiCalls';
import { loadPlanets } from '../../actions';
import Header from '../../components/Header/Header';
import MainDisplay from '../../components/MainDisplay/MainDisplay';
import { connect } from 'react-redux';
import '../../SASS/Index.scss';

class App extends React.Component {
  componentDidMount() {
    this.retrieveData()
  }

  retrieveData = () => {
    getData()
    .then(data => this.props.loadPlanets(data))
    .catch(error => error.message)
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.props.planets &&
        <main>
          <MainDisplay planets={this.props.planets} />
        </main>}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  planets:  state.planets
});

const mapDispatchToProps = (dispatch) => ({
  loadPlanets: (planets) => dispatch(loadPlanets(planets))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
