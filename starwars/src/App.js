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



  // getCharacters = URL => {
  //   // feel free to research what this code is doing.
  //   // At a high level we are calling an API to fetch some starwars data from the open web.
  //   // We then take that data and resolve it our state.
  //   fetch(URL)
  //     .then(res => {
  //       return res.json();
  //     })
  //     .then(data => {
  //       console.log(data);
  //       this.setState({ starwarsChars: data.results });
  //     })
  //     .catch(err => {
  //       throw new Error(err);
  //     });
  // };


  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data.next != null){
        this.setState(() => ({ starwarsChars: data.results, next: data.next, previous: data.previous}));
      } if(data.next === null){
        this.setState(() =>({starwarsChars:data.results}))
      }
      if(data.previous === null){
        //this.setState(() =>({starwarsChars: data.results, previous: null}))
        alert('Welcome Byron! Do not click Previous Page While On This Page, Or Else You Will Join The DARK SIDE!')
      }
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
        <button id="prev" className="button" onClick = {()=>this.getCharacters(this.state.previous)}> Previous Page</button>
        <button className="button" onClick = {()=>this.getCharacters(this.state.next)}> Next Page</button>
      </div>
    );
  }
}


export default App;
