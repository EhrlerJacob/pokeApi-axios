import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  
    const [resData, setResData] = useState([{name: ""}]);
    useEffect(() => {
      axios.get("https://pokeapi.co/api/v2/pokemon?limit=100&offset=0")
      .then((response) => 
      {setResData(response.data.results);
        console.log(response.data.results)
      })
    }, []);
  
  return (
    <div className="App">
      <h1>PokeApi Results</h1>
      {resData.map((pokemon, index) => {
        return (
          <li key={index}>{pokemon.name}</li>
        );
      })}
    </div>
  );
    }

export default App;
