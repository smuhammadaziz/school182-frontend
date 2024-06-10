import React, { useState, useEffect, useRef } from 'react';
import './header.scss';

import { NavLink } from 'react-router-dom';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

import logo from '../../assets/images/logo.svg';

import Hamburger from 'hamburger-react';

import { IoChevronDown } from 'react-icons/io5';

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

  // Ensure lang is valid and fallback to 'ru' if not
  const currentLang = lang || 'ru';
  const translations = content[currentLang] || content['ru'];

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__top'>
          <div className='header__top__logo__wrapper'>
            <NavLink to='/' className='' onClick={goToTop}>
              <img src={logo} alt='182 maktab школа logo' />
            </NavLink>
          </div>
          <div className='header__top__contact'>
            <select
              name='lang'
              id='lang'
              className='header__top__contact__select'
              onChange={handleChangeSwitcher}
              value={currentLang}
            >
              <option value='ru'>ru</option>
              <option value='uz'>uz</option>
            </select>

            <a href='https://182maktab.uz' target='_blank' className='header_login_btn'>
              {translations.navbar.kirish}
            </a>
            <NavLink to='/contact' className='header__button' onClick={goToTop}>
              {translations.navbar.contact}
            </NavLink>
            <div className='header__top__hamburger'>
              <Hamburger
                toggled={isOpen}
                toggle={setOpen}
                size={27}
                rounded
                hideOutline={false}
                onToggle={() => {
                  elNavbar.current.classList.toggle('header__hamburger--active');
                }}
              />
            </div>
          </div>
        </div>
        <div className='header__bottom'>
          <nav className='header__bottom__navbar' ref={elNavbar}>
            <ul className='header__bottom__list'>
              <li className='header__bottom__list__item'>
                <NavLink to='/' className='header__bottom__list__item__link'>
                  {translations.navbar.home}
                </NavLink>
              </li>
              <li className='header__bottom__list__item'>
                <p className='header__bottom__logo__icon'>{translations.navbar.about}</p>
                <ul className='header__list__nest'>
                  <li className='header__nest__item'>
                    <NavLink
                      to='/about'
                      className='header__bottom__list__item__link'
                      onClick={goToTop}
                    >
                      {translations.navbar.about}
                    </NavLink>
                  </li>
                  <li className='header__nest__item'>
                    <NavLink
                      to='/administration'
                      className='header__bottom__list__item__link'
                      onClick={goToTop}
                    >
                      {translations.navbar.administration}
                    </NavLink>
                  </li>
                  {/* <li className='header__nest__item'>
                    <NavLink
                      to='/teachers'
                      className='header__bottom__list__item__link'
                      onClick={goToTop}
                    >
                      {translations.navbar.teachers}
                    </NavLink>
                  </li> */}
                  <li className='header__nest__item'>
                    <NavLink
                      to='/students'
                      className='header__bottom__list__item__link'
                      onClick={goToTop}
                    >
                      {translations.navbar.students}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className='header__bottom__list__item'>
                <NavLink to='/news' className='header__bottom__list__item__link'>
                  {translations.navbar.news}
                </NavLink>
              </li>
              <li className='header__bottom__list__item'>
                <NavLink to='/gallery' className='header__bottom__list__item__link'>
<<<<<<< HEAD
                  {content[lang].navbar.foto}
                </NavLink>
              </li>
              {/* <li className='header__bottom__list__item'>
                <NavLink to='/courses' className='header__bottom__list__item__link'>
                  {content[lang].navbar.course}
=======
                  {translations.navbar.foto}
>>>>>>> 78b45d36b68cba02e47a49e2c3bef6e92d1fe899
                </NavLink>
              </li> */}
              {/* <li className='header__bottom__list__item'>
                <a
                  href='https://182maktab.uz'
                  target='_blank'
                  className='header__bottom__list__item__link'
                >
                  {translations.navbar.kirish}
                </a>
              </li>
              <li className='header__bottom__list__item'>
                <NavLink to='/contact' className='header__bottom__list__item__link'>
                  {translations.navbar.kontakt}
                </NavLink>
              </li> */}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Header;
