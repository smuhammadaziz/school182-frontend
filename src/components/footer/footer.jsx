import React from 'react';
import './style.scss';
import logo from '../../assets/images/Vector.svg';
import gmail from '../../assets/Icon/gmail.png';
import instagram from '../../assets/Icon/instagram.png';
import phone from '../../assets/Icon/phone.png';
import telegram from '../../assets/Icon/telegram.png';
const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='neo'>
          <img src={logo} className='brand' />
        </div>

        <div className='mesto'>
          <h5>Местоположение</h5>
          <pre>
            г. Ташкент, <br /> Мирабадский район, <br /> проспект Амира <br /> темура 33
          </pre>
        </div>
        <ul className='sotsial'>
          <h5>Мы в соцсетях</h5>

          <li>
            <img src={instagram} alt='' />
            <a href='@school_182'>@school_182</a>
          </li>
          <li>
            <img src={phone} alt='' />
            <a href='+998 99 999 99 99'>+998 99 999 99 99</a>
          </li>
          <li>
            <img src={telegram} alt='' />
            <a href='@school_182'>@school_182</a>
          </li>
          <li>
            <img src={instagram} alt='' />
            <a href='@Neooft'>Made By NEOSOFT</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
