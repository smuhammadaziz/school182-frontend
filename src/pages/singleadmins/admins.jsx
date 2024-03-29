import React from 'react';

import './admins.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import OneAdmin from '../../components/oneadmin/admins';

function SingleAdmin() {
  return (
    <div className='news__page'>
      <header>
        <Header />
      </header>

      <main className='news__main'>
        <section>
          <OneAdmin />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SingleAdmin;
