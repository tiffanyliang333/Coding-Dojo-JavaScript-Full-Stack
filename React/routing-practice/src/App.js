import React from 'react';
import Home from './components/Home';
import Param from './components/Param';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className = "App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:word" element={<Param />} />
          <Route path="/:word/:color/:bgColor" element={<Param />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
