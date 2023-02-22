import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    // fetch('http://pokeapi.co/api/v2/pokemon?limit=807')
    //   .then(response => {
    //     return response.json();
    //   })
    //   .then(response => {
    //     setPokemon(response.results);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   })
    axios.get('http://pokeapi.co/api/v2/pokemon?limit=807')
      .then((response) =>{console.log(response.data.results);
        setPokemon(response.data.results);
    })
  }, []);

  return (
    <div className="App">
      <h1>Pokemon API</h1>
      <ul>
        {
          pokemon.map((pokemonObj, index) => {
            return(<li key={index}>{pokemonObj.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
