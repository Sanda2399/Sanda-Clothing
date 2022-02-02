import React from 'react';
import { Route, Routes } from 'react-router-dom';

import './App.css';

import HomePage from './Pages/Homepage/Homepage';

const HatsPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop/hats" element={<HatsPage />} />
      </Routes>
    </div>
  );
}

export default App;