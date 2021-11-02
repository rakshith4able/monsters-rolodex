import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => { return response.json() }
      ).then((data) => { this.setState({ monsters: data }) });
  }

  render() {
    return (
      <div className="App">
        <input
          type='search'
          onChange={e => this.setState({ searchField: e.target.value })}
          value={this.state.searchField}
          placeholder='Search Monsters' />
        <CardList monsters={this.state.monsters} />
      </div>
    );
  }
}

export default App;
