import React from 'react';

import './about.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import OneStudent from '../../components/onestudent/students';
import OneAdmin from '../../components/oneadmin/admins';
import AboutSchool from '../../components/aboutus/about';

function AboutUs() {
  return (
    <div className='news__page'>
      <header>
        <Header />
      </header>

      <main className='news__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>Maktab haqida malumot</h2>
          </div>
        </section>

        <section>
          <AboutSchool />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AboutUs;
