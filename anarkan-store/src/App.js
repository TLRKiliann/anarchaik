import React from 'react';
//import { useState, useEffect } from "react";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
//import SignUp from './Pages/signup';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="routes--class">
        <Router>
          <Navbar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Services' element={<Services />} />
            <Route path='/Contact' element={<Contact />} />
            <Route path='/Blog' element={<Blog />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
