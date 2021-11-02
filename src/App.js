import React, { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.components';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  handleChange = e => this.setState({ searchField: e.target.value });

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => { return response.json() }
      ).then((data) => { this.setState({ monsters: data }) });
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => (
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    ));

    return (
      <div className="App">

        <SearchBox
          placeholder='Search Monsters'
          handleChange={this.handleChange}
          value={this.state.searchField}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
