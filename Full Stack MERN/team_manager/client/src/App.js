import {useState} from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import AddPlayerForm from './views/AddPlayerForm';
import GameStatus from './views/GameStatus';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element = {<Main />} path = "/player/list" />
          <Route element = {<AddPlayerForm />} path = "/player/new" />
          <Route element = {<GameStatus />} path = "/status/game/1" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
