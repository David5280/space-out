import React from 'react';
import { getData } from './Utilz/apiCalls';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import './SASS/Index.scss';

class App extends React.Component {
  constructor() {
    super()
    this.state = []
  }
  componentDidMount() {
    this.retrieveData()
  }

  retrieveData = (searchText) => {
    console.log(searchText)
    getData(searchText)
    .then(data => this.setState(data))
    .catch(error => error.message)
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Aside retrieveData={this.retrieveData}/>
      </div>
    )
  }
}

export default App;
