import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Styling
import './App.css';

// Header Import
import Header from './Components/Header/Header';

// Page Imports
import HomePage from './Pages/Homepage/Homepage';
import ShopPage from './Pages/ShopPage/ShopPage';


// Main App
function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/shop" element={<ShopPage />} />
      </Routes>
    </div>
  );
}

export default App;