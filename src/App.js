import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // import FontAwesome CSS
import Home from './Components/Pages/Home';
import signup from './Components/Pages/signup';
import Services from './Components/Pages/Services';
import Products from './Components/Pages/Products';


function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/signup' exact Component={signup} />
          <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;