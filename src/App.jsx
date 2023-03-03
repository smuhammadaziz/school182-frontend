import React from 'react';
import './index.css';

import { Route, Routes } from 'react-router-dom';

import Home from './pages/home/home';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
