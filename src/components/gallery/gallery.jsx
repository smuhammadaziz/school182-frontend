import React, { useState } from 'react';
import './gallery.scss';
import { Gallery } from 'react-grid-gallery';

import { images as IMAGES } from '../../database/images';

const images = IMAGES.map(image => ({
  ...image,
  customOverlay: (
    <div className='custom-overlay__caption'>
      <div>{image.caption}</div>
      {image.tags &&
        image.tags.map((t, index) => (
          <div key={index} className='custom-overlay__tag'>
            {t.title}
          </div>
        ))}
    </div>
  ),
}));

function Galleries() {
  return (
    <div className='galleries'>
      <div className='container'>
        <h2>ФОТОГАЛЕРЕЯ</h2>
        <div>
          <Gallery images={images} enableImageSelection={false} />
        </div>
      </div>
    </div>
  );
}

export default Galleries;
