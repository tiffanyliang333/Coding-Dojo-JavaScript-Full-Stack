import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AuthorList from './components/AuthorList';
import Update from './components/Update';
import New from './components/New';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <h1 className="header">Favorite Authors</h1>
        <Routes>
          <Route element = {<AuthorList />} path = "/authors" />
          <Route element = {<Update />} path = "/authors/edit/:id" />
          <Route element = {<New />} path = "/authors/new" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
