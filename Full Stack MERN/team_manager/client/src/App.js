import {useState} from 'react';
import {BrowserRouter, Router, Route} from 'react-router-dom';
import Header from './components/Header';
import './App.css';

function App() {
  const [listActive, setListActive] = useState(true);
  const [manageStatusActive, setManageStatusActive] = useState(false);

  return (
    <BrowserRouter>
      <div className="App">
        <Header 
          manageStatusActive = {manageStatusActive}
          setManageStatusActive = {manageStatusActive}/>
        <Router>
          <PlayerList path ="/player/list"
          listActive = {listActive}
          setListActive = {setListActive}
          setManageStatusActive = {setManageStatusActive} />
        </Router>
      </div>
    </BrowserRouter>
  );
}

export default App;
