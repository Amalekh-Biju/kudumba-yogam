import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Nav from './components/nav/Nav';

const App = () => {
  return (
    <div>
      <Router>
        <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>  
      </Router>
    </div>
  );
}

export default App;
