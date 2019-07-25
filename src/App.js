import React from 'react';
import { getSearchData } from './Utilz/apiCalls';
import './App.css';

class App extends React.Component {
  componentDidMount() {
    getSearchData()
    .then(data => console.log('a', data))
    .catch(error => error.message)
  }
  render() {
    return (
      <div className="App">
  
      </div>
    )
  }
}

export default App;
