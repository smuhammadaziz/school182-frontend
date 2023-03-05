import React from 'react';
import './news.scss';

//components
import Header from '../../components/header/header';

function News() {
  return (
    <div className='news__page'>
      <header>
        <Header />
      </header>

      <main className='news__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>Новости школы</h2>
          </div>
        </section>
      </main>
    </div>
  );
}

export default News;
