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
  render() {
    return(
      <section className='form-container'>
        <form className='stats-form'>
        <input 
          type='text' 
          className='stats-form-input' 
          placeholder='First Name...' 
        />
        <input 
          type='text' 
          className='stats-form-input' 
          placeholder='Age...' 
        />
        <input 
          type='text' 
          className='stats-form-input' 
          placeholder='Weight...  (lbs)' 
        />
        <button className='stats-form-input'>Submit!</button>
        </form>
      </section>
    )
  }
}

export default StatsForm;