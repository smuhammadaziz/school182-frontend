import React from 'react';

import './news.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import SingleNews from '../../components/onenews/news';

function SingleNewsPage() {
  return (
    <div className='news__page'>
      <header>
        <Header />
      </header>

      <main className='news__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>Title</h2>
          </div>
        </section>

        <section>
          <SingleNews />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SingleNewsPage;
