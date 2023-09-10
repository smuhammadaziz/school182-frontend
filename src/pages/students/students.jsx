import React from 'react';
import './students.scss';

//components
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import AllStudents from '../../components/allstudents/students';

function Students() {
  return (
    <div className='admins__page'>
      <header>
        <Header />
      </header>

      <main className='admins__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>Eng zor oquvchilar</h2>
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
