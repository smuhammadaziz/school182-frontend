import React from 'react';
import './about.scss';

import img1 from '../../assets/images/Picture1.jpg';
import img2 from '../../assets/images/Picture2.jpg';
import img3 from '../../assets/images/Picture3.jpg';
import img4 from '../../assets/images/Picture4.jpg';
import img5 from '../../assets/images/Picture5.png';
import img6 from '../../assets/images/Picture6.jpg';

function AboutUsPics() {
  return (
    <div className='about__pics'>
      <div className='container'>
        <h2 className='about__pics__heading'>Школьные фотографии</h2>

        <ul className='about__pics__list'>
          <li>
            <img src={img1} alt='182 maktab kirish qismi' width='500' />
            <p>Вход в школу </p>
          </li>
          <li>
            <img src={img2} alt='182 maktab kirish qismi' width='500' />
            <p>Спортивный зал </p>
          </li>
          <li>
            <img src={img3} alt='182 maktab kirish qismi' width='500' />
            <p>Школьный стадион </p>
          </li>
          <li>
            <img src={img4} alt='182 maktab kirish qismi' width='500' />
            <p>Зал школы </p>
          </li>
          <li>
            <img src={img5} alt='182 maktab kirish qismi' width='500' />
            <p>Школьный класс </p>
          </li>
          <li>
            <img src={img6} alt='182 maktab kirish qismi' width='500' />
            <p>Школьная кухня </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default AboutUsPics;
