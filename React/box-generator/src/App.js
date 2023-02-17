import './App.css';
import React, { useState } from 'react';
import ColorForm from './components/ColorForm';
import ColorDisplay from './components/ColorDisplay';

function App() {

    const [newColor, setNewColor] = useState([]);

    return(
      <>
        <ColorForm newColor ={ newColor } setNewColor={ setNewColor } />
        <ColorDisplay boxColorArray={ newColor }/>
      </>
    );
  
}

export default App;
