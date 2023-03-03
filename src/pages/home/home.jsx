import React from 'react';
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <section className='home__intro'>
          <Intro />
        </section>
      </main>
    </div>
  );
}

export default Home;
