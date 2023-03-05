import React from 'react';
import './admins.scss';

import Header from '../../components/header/header';

function Admins() {
  return (
    <div className='admins__page'>
      <header>
        <Header />
      </header>

      <main className='admins__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>Администрация школы</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Admins;
