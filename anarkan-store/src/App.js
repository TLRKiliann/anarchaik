import React from 'react';
//import { useState, useEffect } from "react";
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './Pages';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Blog from './Pages/Blog';
//import FooterBar from './Components/FooterBar';
//import Photos from './FootPages/Photos';
//import Partners from './FootPages/Partners';
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

/*
          <FooterBar />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/Photos' element={<Photos />} />
            <Route path='/Partners' element={<Partners />} />
          </Routes>
*/