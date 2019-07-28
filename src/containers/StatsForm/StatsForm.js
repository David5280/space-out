import React from 'react';

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

  render() {
    return(
      <section className='form-container'>
        <form className='stats-form'>
        <input 
          className='stats-form-input' 
          name='name' 
          placeholder='First Name...'
          type='text'
          onChange={this.handleChange} 
        />
        <input 
          className='stats-form-input' 
          name='age' 
          placeholder='Age...' 
          type='text'
          onChange={this.handleChange} 
        />
        <input 
          className='stats-form-input' 
          name='weight'
          placeholder='Weight...  (lbs)' 
          type='text'
          onChange={this.handleChange} 
        />
        <button className='stats-form-input'>Submit!</button>
        </form>
      </section>
    )
  }
}

export default StatsForm;