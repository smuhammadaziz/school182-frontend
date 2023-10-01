import React from 'react';
import './courses.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Course from '../../components/course/course';

function Courses() {
  return (
    <div className='courses'>
      <header>
        <Header />
      </header>

      <main>
        <Course />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Courses;
