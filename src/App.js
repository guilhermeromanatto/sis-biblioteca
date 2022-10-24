import './App.css';
import Navigation from './components/Navigation';
import { Routes, Route } from 'react-router-dom';

import Home from './components/Home';
import Details from './components/Details';
import Register from './components/Register';
import Update from './components/Update';


function App() {
  return (
    <div>
      <h1 className='nome'>Biblioteca</h1>

      <Navigation />

      <Routes>
          <Route path="home/" element={<Home />} />
          <Route path="details/:id" element={<Details />} />
          <Route path="register/" element={<Register />} />
          <Route path="update/:id" element={<Update />} />
      </Routes>
    </div>
  );
}

export default App;
