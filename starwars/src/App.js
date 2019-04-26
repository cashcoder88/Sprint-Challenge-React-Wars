import React, { Component } from 'react';
import './App.css';

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
        <div>
          {this.state.starwarsChars.map((char) => (
            <div className="character" key={char.url}>
              <h1>{char.name}</h1>
              <p>Height: {char.height}</p>
              <p>Weight: {char.weight}</p>
              <p>Birth Year: {char.birth_year}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
/*         "name": "Luke Skywalker", 
            "height": "172", 
            "mass": "77", 
            "hair_color": "blond", 
            "skin_color": "fair", 
            "eye_color": "blue", 
            "birth_year": "19BBY",  */