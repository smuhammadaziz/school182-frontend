import React from 'react';
import './students.scss';

//components
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import AllStudents from '../../components/allstudents/students';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';
function Students() {
  const [lang] = useLang('ru');
  return (
    <div className='admins__page'>
      <header>
        <Header />
      </header>

      <main className='admins__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>{content[lang].news.beststudents}</h2>
          </div>
        </section>

        <section>
          <AllStudents />
        </section>
      </main>

      <footer className='students_students'>
        <Footer />
      </footer>
    </div>
  );
}

export default Students;
