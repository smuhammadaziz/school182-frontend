import React, { useState, useEffect, useRef } from 'react';
import './header.scss';

import { NavLink } from 'react-router-dom';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

import logo from '../../assets/images/logo.svg';

import Hamburger from 'hamburger-react';

import { AiOutlineCaretDown } from 'react-icons/ai';

const Header = () => {
  const elNavbar = useRef(null);
  const elNavbarr = useRef(null);
  const [lang, setLang] = useLang('ru');
  const [isOpen, setOpen] = useState(false);

  const selectedValue = value => {
    setLang(value);
  };

  const handleChangeSwitcher = e => {
    selectedValue(e.target.value);
  };

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__top'>
          <div className='header__top__logo__wrapper'>
            <img src={logo} alt='182 maktab школа logo' />
          </div>
          <div className='header__top__contact'>
            <select name='lang' id='lang' className='header__top__contact'>
              <option value='ru'>ru</option>
              <option value='uz'>uz</option>
            </select>

            <a href='https://182maktab.uz' target='_blank' className=' header_login_btn'>
              {content[lang].navbar.kirish}
            </a>
            <NavLink to='/contact' className=' header__button' onClick={goToTop}>
              {content[lang].navbar.contact}
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
