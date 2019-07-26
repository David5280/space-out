import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import ListItem from '../ListItem/ListItem';
import PlanetInfo from '../PlanetInfo/PlanetInfo';

class Aside extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value }) 
  }

  handleClick = (e) => {
    this.handleSubmit(e);
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.retrieveData(this.state.search)
  }

  
  render() {
    const listItems = this.props.planets.map(planet => {
        return (
          <ListItem 
            planet={planet} 
            onClick={<Route exact path={`/${planet.title}`} render={() => <PlanetInfo planet={planet} />}/>} />)
      })
    return(
      <aside>
        <form
          onSubmit={this.handleSubmit}>
          <input 
            type='search' 
            className='aside-search-input'
            placeholder='Example: "Earth"'
            onChange={this.handleChange} 
          />
          <button
            className='aside-search-submit'>
            Search!
          </button>
        </form>
        <nav>
          <ul>
            {listItems}
          </ul>
        </nav>
      </aside>
    )
  }
}

const mapStateToProps = (state) => ({
  planets: state.planets
})

export default connect(mapStateToProps)(Aside);