import React from 'react';
import './teachers.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Teachres from '../../components/teachers/teachers';

function Teachers() {
  return (
    <div className='admins__page'>
      <header>
        <Header />
      </header>

      <main className='admins__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>Лучшие учителя школы</h2>
          </div>
        </section>

        <section>
          <Teachres />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Teachers;
