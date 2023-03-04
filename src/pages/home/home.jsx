import React from 'react';

//components
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Administration from '../../components/administration/administration';
import News from '../../components/news/news';

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Intro />
        <Administration />
        <News />
      </main>
    </div>
  );
}

export default Home;
