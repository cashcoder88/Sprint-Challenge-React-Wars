import React from 'react';
import './StarWars.css';

const Chars = (props) => {
    return (
    <div className="containerDiv">
        {props.array.map((char) => (
          <div className="character" key={char.url}>
            <h1 className="name">{char.name}</h1>
            <p className="height">Height: {char.height}cm</p>
            <p className="weight">Weight: {char.mass}kg</p>
            <p className="birth_year">Birth Year: {char.birth_year}</p>
          </div>
        ))}
    </div>
    )
}


export default Chars;