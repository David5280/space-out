import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { addUser } from '../../actions';
import { connect } from 'react-redux';

export class StatsForm extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '',
      age: '',
      weight: ''
    }
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.clearState();
  };

  clearState = () => {
    this.setState({
      name: '',
      age: '',
      weight: ''
    })
  };

  render() {
    const planetOptions = this.props.planets.map(planet => {
        return (
          <div 
            className='stats-link-option'
            key={planet.title}
          >
            <NavLink 
              to={`/stats/${planet.title}`} 
            >
              {planet.title}
            <img 
              src={planet.cutout} 
              alt={`${planet.title}-cutout`} 
              className='stats-cutout' 
            />
            </NavLink>
          </div>
        )
      });
      
    return(
      <section className='form-container'>
        {
          (!this.props.user.name &&
            !this.props.user.age &&
            !this.props.user.weight) &&
            <form className='stats-form'>
            <input 
              className='stats-form-input name-input'
              name='name' 
              placeholder='First Name...'
              type='text'
              onChange={(e) => this.handleChange(e)}
              value={this.state.name} 
            />
            <input 
              className='stats-form-input age-input' 
              name='age' 
              placeholder='Age...' 
              type='text'
              onChange={(e) => this.handleChange(e)}
              value={this.state.age} 
            />
            <input 
              className='stats-form-input weight-input' 
              name='weight'
              placeholder='Weight...  (lbs)' 
              type='text'
              onChange={(e) => this.handleChange(e)}
              value={this.state.weight} 
            />
            <button 
              className='stats-form-input submit-btn'
              onClick={(e) => this.handleSubmit(e)}>Submit!</button>
          </form>
        }
        {
          (this.props.user.name &&
            this.props.user.age &&
            this.props.user.weight) &&
          <section className='stats-greeting'>
            <h3>Hello, {this.props.user.name}!</h3>
            <p>Pick a planet below to simulate yourself there!</p>
            <div className='stats-planets-list'>
              {planetOptions}
            </div>
          </section>
        }
      </section>
    )
  }
};

const mapStateToProps = (state) => ({
  user: state.user,
  planets: state.planets
});

const mapDispatchToProps = (dispatch) => ({
  addUser:(user) => dispatch(addUser(user))
});

StatsForm.propTypes = {
  user: PropTypes.object,
  planets: PropTypes.array,
  addUser: PropTypes.func
};

export default connect(mapStateToProps, mapDispatchToProps)(StatsForm);