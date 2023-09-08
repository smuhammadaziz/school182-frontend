import React from 'react';
import './index.css';

import { Route, Routes } from 'react-router-dom';

//pages
import Home from './pages/home/home';
import Contact from './pages/contact/contact';
import Admins from './pages/admins/admins';
import News from './pages/news/news';
import Teachers from './pages/teachers/teachers';
import SingleNewsPage from './pages/singlenews/news';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/students' element={<Contact />} />
        <Route path='/teachers' element={<Teachers />} />
        <Route path='/administration' element={<Admins />} />
        <Route path='/news' element={<News />} />
        <Route path='/news/1' element={<SingleNewsPage />} />
      </Routes>
    </div>
  );
}

export default App;
