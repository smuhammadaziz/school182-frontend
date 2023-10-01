import React from 'react';
import './style.scss';
import logo from '../../assets/images/Vector.svg';

import insta from '../../assets/Icon/insta.svg';
import tg from '../../assets/Icon/tg.svg';
import fc from '../../assets/Icon/fc.svg';
import yt from '../../assets/Icon/yt.svg';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

const Footer = () => {
  const [lang] = useLang('ru');
  return (
    <footer className='footer'>
      <div className='container footer-container'>
        <div className='neo'>
          <img src={logo} className='brand' />

          <p className='footer__side__desc'>{content[lang].footer.text}</p>
        </div>

        <ul className='sotsial'>
          <li>
            <img src={tg} alt='' width='40' />
            <a href='@school_182'>@school_182</a>
          </li>
          <li>
            <img src={insta} alt='' width='40' />
            <a href='@school_182'>@school_182</a>
          </li>
          <li>
            <img src={fc} alt='' width='40' />
            <a href='@school_182'>@school_182</a>
          </li>
          <li>
            <img src={yt} alt='' width='40' />
            <a href='@school_182'>@school_182</a>
          </li>
        </ul>
        <div className='mesto'>
          <h5>{content[lang].footer.adres}</h5>
          <div className='mesto_inline'>
            <p>{content[lang].footer.location}</p>
            <p>+ 998 (99) 999-99-99</p>
          </div>
        </div>
      </div>
      <div className='footer__bottom'>
        <div className='container'>
          <p>© 2023 Все права защищены.</p>
          <p>
            Разработано в{' '}
            <a href='https://t.me/rmuhammadaziz' target='_blank'>
              NEOSOFT
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
