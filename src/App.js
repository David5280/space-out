import React from 'react';
import { getSearchData } from './Utilz/apiCalls';
import Header from './Header/Header';
import './SASS/Index.scss';

class App extends React.Component {
  componentDidMount() {
    getSearchData()
    .then(data => console.log('a', data))
    .catch(error => error.message)
  }
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    )
  }
}

export default App;
