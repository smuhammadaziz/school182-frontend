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
      <div className='container'>
        <div className='neo'>
          <img src={logo} className='brand' />
        </div>

        <div className='mesto'>
          <h5>{content[lang].footer.location}</h5>
          <pre>
            г. Ташкент, <br /> Мирабадский район, <br /> проспект Амира <br /> темура 33
          </pre>
        </div>
        <ul className='sotsial'>
          <h5>{content[lang].footer.social}</h5>

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
        </ul>
      </div>

      <div className='footer__down' style={{ display: 'flex', flexDirection: 'column' }}>
        <a href='#' className='footer__down__link'>
          {content[lang].neosoft.made}
        </a>
        <a
          href='tel:+998900291088'
          className='footer__down__link'
          style={{ marginTop: '10px' }}
        >
          Тел: +998 (90) 029 10 88
        </a>
      </div>
    </footer>
  );
};

export default Footer;
