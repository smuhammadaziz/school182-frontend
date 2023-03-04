import React from 'react';

//components
import Header from '../../components/header/header';
import Intro from '../../components/intro/intro';
import Administration from '../../components/administration/administration';
import News from '../../components/news/news';
import Statistics from '../../components/statistics/statistics';
import Teachres from '../../components/teachers/teachers';

function Home() {
  return (
    <div>
      <header>
        <Header />
      </header>

      <main>
        <Intro />
        <News />
        {/* <Administration /> */}
        <Statistics />
        <Teachres />
      </main>
    </div>
  );
}

export default Home;
