import React from 'react';
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Administration from '../../components/administration/administration';

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Intro />
        <Administration />
      </main>
    </div>
  );
}

export default Home;
