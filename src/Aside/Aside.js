import React from 'react';

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
    this.setState({ search: e.target.innerHTML });
    this.handleSubmit(e);
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
            <li
              value='Mercury'
              onClick={this.handleClick.bind(this)}>
                Mercury
            </li>
            <li
              value='Venus'
              onClick={this.handleClick}>
                Venus
            </li>
            <li
              value='Earth'
              onClick={this.handleClick}>
                Earth
            </li>
            <li
              value='Planet Mars'
              onClick={this.handleClick}>
                Mars
            </li>
            <li
              value='Saturn'
              onClick={this.handleClick}>
                Saturn
            </li>
            <li
              value='Jupiter'
              onClick={this.handleClick}>
                Jupiter
            </li>
            <li
              value='Neptune'
              onClick={this.handleClick}>
                Neptune
            </li>
            <li
              value='Pluto'
              onClick={this.handleClick}>
                Pluto
            </li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Aside;