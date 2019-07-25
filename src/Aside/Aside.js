import React from 'react';

class Aside extends React.Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }

  handleChange = (e) => {
    e.target.value ? 
    this.setState({ search: e.target.value }) :
    this.setState({ search: e.target.innerHTML })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.retrieveData(this.state.search)
  }

  render() {
    return(
      <aside>
        <form
          onSubmit={this.handleSubmit}>
          <input 
            type='search' 
            className='aside-search-input'
            onChange={this.handleChange} 
          />
          <button>
            Search!
          </button>
        </form>
        <nav>
          <ul>
            <li
              onClick={this.handleChange}>
                Mercury
            </li>
            <li
              onClick={this.handleChange}>
                Venus
            </li>
            <li
              onClick={this.handleChange}>
                Earth
            </li>
            <li
              onClick={this.handleChange}>
                Mars
            </li>
            <li
              onClick={this.handleChange}>
                Saturn
            </li>
            <li
              onClick={this.handleChange}>
                Jupitor
            </li>
            <li
              onClick={this.handleChange}>
                Neptune
            </li>
            <li
              onClick={this.handleChange}>
                Pluto
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Aside;