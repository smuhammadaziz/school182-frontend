import React from 'react';
import './style.scss';
import logo from '../../assets/images/Vector.svg';
import instagram from '../../assets/Icon/instagram.png';
import phone from '../../assets/Icon/phone.png';
import telegram from '../../assets/Icon/telegram.png';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

const Footer = () => {
  const [lang] = useLang('ru');
  return (
    <footer>
      <div className='container footer-container'>
        <div className='neo'>
          <img src={logo} className='brand' />

          <p className='footer__side__desc'>{content[lang].footer.text}</p>
        </div>

        <ul className='sotsial'>
          <li>
            <img src={instagram} alt='' />
            <a href='@school_182'>@school_182</a>
          </li>
          <li>
            <img src={telegram} alt='' />
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
    </footer>
  );
};

export default Footer;
