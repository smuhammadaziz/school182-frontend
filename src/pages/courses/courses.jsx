import React from 'react';
import './courses.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Course from '../../components/course/course';
import Teachers from '../../components/allteachers/teachers';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';
function Courses() {
  const [lang] = useLang('ru');
  return (
    <div className='admins__page'>
      <header>
        <Header />
      </header>

      <main className='admins__main'>
        <div className='contact__main__heading'>
          <h2>{content[lang].news.course}</h2>
        </div>
        {/* <Course /> */}

        <Teachers />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Courses;
