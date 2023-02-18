import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    fetch('http://pokeapi.co/api/v2/pokemon?limit=807')
      .then(response => {
        return response.json();
      })
      .then(response => {
        setPokemon(response.results);
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  return (
    <div className="App">
      <ul>
        {
          pokemon.map((pokemonObject, index) => {
            return(<li key={index}>{pokemonObject.name}</li>)
          })
        }
      </ul>
    </div>
  );
}

export default App;
