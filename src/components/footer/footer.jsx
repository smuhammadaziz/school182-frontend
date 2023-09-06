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

          <p className='site_desc'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque ea quidem
            aliquid, repellendus ad minima voluptatum ex facilis eos debitis!
          </p>
        </div>

        <div className='mesto'>
          <h5>{content[lang].footer.location}</h5>
          <div className='col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 mesto_inline'>
            <p>
              <i className='bi bi-house-door-fill'></i> New York, NY 10012, US
            </p>
            <p>
              <i className='bi bi-envelope-fill'></i>
              info@example.com
            </p>
            <p>
              <i className='bi bi-telephone-fill'></i> + 01 234 567 88
            </p>
          </div>
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

      {/* <div className='footer__down'>
        <a href='#' className='footer__down__link'>
          {content[lang].neosoft.made}
        </a>
        <a href='tel:+998900291088' className='footer__down__link'>
          Тел: +998 (90) 029 10 88
        </a>
      </div> */}
    </footer>
  );
};

export default Footer;
