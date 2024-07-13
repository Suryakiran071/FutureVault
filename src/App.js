import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css'; // import FontAwesome CSS
import Home from './Components/Pages/Home';
import signup from './Components/Pages/signup';



function App() {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' exact Component={Home} />
          <Route path='/signup' exact Component={signup} />
        </Routes>
      </Router>
    </>
  );
}

export default App;