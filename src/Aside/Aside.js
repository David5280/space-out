import React from 'react';

class Aside extends React.Component {
  render() {
    return(
      <aside>
        <input type='search' className='aside-search-input' />
        <nav>
          <ul>
            <li>Mercury</li>
            <li>Venus</li>
            <li>Earth</li>
            <li>Mars</li>
            <li>Saturn</li>
            <li>Jupitor</li>
            <li>Neptune</li>
            <li>Pluto</li>
          </ul>
        </nav>
      </aside>
    )
  }
}

export default Aside;