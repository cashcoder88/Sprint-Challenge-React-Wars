import React, { Component } from 'react';
import './App.css';
import Chars from './components/Chars'

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }



  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
        <h1 className="Header">The Star Wars Tale Of The Tape!</h1>
        <Chars 
          //props
          array={this.state.starwarsChars}
          name={this.state.starwarsChars.name}
          height={this.state.starwarsChars.height}
          weight={this.state.starwarsChars.mass}
          birthYear={this.state.starwarsChars.birth_year}
        />
      </div>
    );
  }
}

/*    <div className="character" key={char.url}>
  <h1 className="name">{char.name}</h1>
  <p className="height">Height: {char.height}cm</p>
  <p className="weight">Weight: {char.mass}kg</p>
  <p className="birth_year">Birth Year: {char.birth_year}</p>
</div>
            
  */

export default App;
