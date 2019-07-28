import React from 'react';
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
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addUser(this.state);
    this.clearState();
  }

  clearState = () => {
    this.setState({
      name: '',
      age: '',
      weight: ''
    })
  }

  render() {
    return(
      <section className='form-container'>
        {
          (!this.props.user.name) &&
          <form className='stats-form'>
          <input 
            className='stats-form-input' 
            name='name' 
            placeholder='First Name...'
            type='text'
            onChange={this.handleChange}
            value={this.state.name} 
          />
          <input 
            className='stats-form-input' 
            name='age' 
            placeholder='Age...' 
            type='text'
            onChange={this.handleChange}
            value={this.state.age} 
          />
          <input 
            className='stats-form-input' 
            name='weight'
            placeholder='Weight...  (lbs)' 
            type='text'
            onChange={this.handleChange}
            value={this.state.weight} 
          />
          <button 
            className='stats-form-input'
            onClick={this.handleSubmit}>Submit!</button>
          </form>
        }
        {
          (this.props.user.name) &&
          <h3 className='stats-greeting'>Hello, {this.props.user.name}!</h3>
        }
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  addUser:(user) => dispatch(addUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(StatsForm);