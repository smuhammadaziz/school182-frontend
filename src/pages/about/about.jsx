import React from 'react';

import './about.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Statistics from '../../components/statistics/statistics';
import AboutSchool from '../../components/aboutus/about';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';
import AboutUsPics from '../../components/aboutuspics/about';

function AboutUs() {
  const [lang] = useLang('ru');

  return (
    <div className='news__page'>
      <header>
        <Header />
      </header>

      <main className='news__main'>
        <section>
          <div className='contact__main__heading'>
            <h2>{content[lang].news.aboutschool}</h2>
          </div>
        </section>

        <section>
          <Statistics />
          <AboutSchool />
          <AboutUsPics />
        </section>
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default AboutUs;
