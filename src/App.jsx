import React from 'react';
import './index.css';

import { Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Admins from './pages/admins/admins';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/students' element={<Contact />} />
        <Route path='/teachers' element={<Contact />} />
        <Route path='/administration' element={<Admins />} />
      </Routes>
    </div>
  );
}

export default App;
