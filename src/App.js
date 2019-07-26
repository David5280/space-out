import React from 'react';
import { getData } from './Utilz/apiCalls';
import Header from './Header/Header';
import Aside from './Aside/Aside';
import MainDisplay from './MainDisplay/MainDisplay';
import './SASS/Index.scss';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    this.retrieveData()
  }

  retrieveData = () => {
    getData()
    .then(data => this.setState({ data:  data }))
    .catch(error => error.message)
  }

  render() {
    return (
      <div className="App">
        <Header />
        {this.state.data &&
        <main>
          <Aside retrieveData={this.retrieveData} />
          <MainDisplay data={this.state.data} />
        </main>}
      </div>
    )
  }
}

export default App;
