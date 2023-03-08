import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Main from './views/Main';
import Detail from './components/Detail';
import './App.css';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element = {<Main />} path="/products" />
          <Route element={<Detail />} path="/products/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
