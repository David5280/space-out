import React from 'react'
import ListItem from '../ListItem/ListItem';
import { connect } from 'react-redux';

const Header = (props) => {
  const items = props.planets.map(planet => {
    return <ListItem planet={planet} className='header-nav-item'/>
  })
  return (
    <header>
      <h1>SPACE-OUT</h1>
      <section className='header-nav'>
        {items}
      </section>
    </header>
  )
}

const mapStateToProps = (state) => ({
  planets: state.planets
})

export default connect(mapStateToProps)(Header);