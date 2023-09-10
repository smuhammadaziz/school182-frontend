import React from 'react';

import './teachers.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import OneTeacher from '../../components/oneTeacher/teachers';

function SingleTeacher() {
  return (
    <div className='news__page'>
      <header>
        <Header />
      </header>

      <main className='news__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>UStoz haqida malumot</h2>
          </div>
        </section>

        <section>
          <OneTeacher />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SingleTeacher;
