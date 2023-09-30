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

          <p className='site_desc'>{content[lang].footer.text}</p>
        </div>

        <ul className='sotsial'>
          <h5>{content[lang].footer.social}</h5>
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
          <h5>{content[lang].footer.location}</h5>
          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mesto_inline'>
            <p>
              <i className='bi bi-house-door-fill'></i>Ташкент, 12 Қатартол 2
            </p>
            <p>
              <i className='bi bi-telephone-fill'></i> + 998 99 999 99 99
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
