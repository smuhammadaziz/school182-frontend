import React from 'react';
import './news.scss';

//components
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import AllNews from '../../components/allnews/news';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

function News() {
  const [lang] = useLang('ru');
  return (
    <div className='news__page'>
      <header>
        <Header />
      </header>

      <main className='news__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>{content[lang].news.heading}</h2>
          </div>
        </section>

        <section>
          <AllNews />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default News;
