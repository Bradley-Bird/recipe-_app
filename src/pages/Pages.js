import React from 'react';
import Home from './Home';
import Cuisine from './Cuisine';
import Searched from './Searched';
import { Routes, Route } from 'react-router-dom';

function Pages() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
        <Route path="/searched/:searched" element={<Searched />} />
      </Routes>
    </div>
  );
}

export default Pages;
