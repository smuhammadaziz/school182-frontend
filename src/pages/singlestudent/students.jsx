import React from 'react';

import './students.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import OneStudent from '../../components/onestudent/students';

function SingleStudent() {
  return (
    <div className='news__page'>
      <header>
        <Header />
      </header>

      <main className='news__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>student haqida malumot</h2>
          </div>
        </section>

        <section>
          <OneStudent />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SingleStudent;
