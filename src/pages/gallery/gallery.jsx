import React from 'react';
import './gallery.scss';

import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import Galleries from '../../components/gallery/gallery';

function Gallery() {
  return (
    <div className='gallery'>
      <header>
        <Header />
      </header>

      <main>
        <Galleries />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Gallery;
