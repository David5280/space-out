import React from 'react';
import { getSearchData } from './Utilz/apiCalls';
import Header from './Header/Header';
import Aside from './Aside/Aside';
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
        <Aside />
      </div>
    )
  }
}

export default App;
