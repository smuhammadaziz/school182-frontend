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
  const [lang, setLang] = useLang('uz');
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
            >
              <option value='uz'>uz</option>
              <option value='ru'>ru</option>
            </select>

            <a
              href='https://dashboard.182maktab.uz'
              target='_blank'
              className=' header_login_btn'
            >
              {content[lang].navbar.kirish}
            </a>
            <NavLink to='/contact' className=' header__button' onClick={goToTop}>
              {content[lang].navbar.contact}
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
                  {content[lang].navbar.home}
                </NavLink>
              </li>
              <li className='header__bottom__list__item'>
                <p className='header__bottom__logo__icon'>{content[lang].navbar.about}</p>
                <ul className='header__list__nest'>
                  <li className='header__nest__item'>
                    <NavLink
                      to='/about'
                      className='header__bottom__list__item__link'
                      onClick={goToTop}
                    >
                      {content[lang].navbar.about}
                    </NavLink>
                  </li>
                  <li className='header__nest__item'>
                    <NavLink
                      to='/administration'
                      className='header__bottom__list__item__link'
                      onClick={goToTop}
                    >
                      {content[lang].navbar.administration}
                    </NavLink>
                  </li>
                  {/* <li className='header__nest__item'>
                    <NavLink
                      to='/teachers'
                      className='header__bottom__list__item__link'
                      onClick={goToTop}
                    >
                      {content[lang].navbar.teachers}
                    </NavLink>
                  </li> */}
                  <li className='header__nest__item'>
                    <NavLink
                      to='/students'
                      className='header__bottom__list__item__link'
                      onClick={goToTop}
                    >
                      {content[lang].navbar.students}
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li className='header__bottom__list__item'>
                <NavLink to='/news' className='header__bottom__list__item__link'>
                  {content[lang].navbar.news}
                </NavLink>
              </li>
              <li className='header__bottom__list__item'>
                <NavLink to='/gallery' className='header__bottom__list__item__link'>
                  {content[lang].navbar.foto}
                </NavLink>
              </li>
              {/* <li className='header__bottom__list__item'>
                <NavLink to='/courses' className='header__bottom__list__item__link'>
                  {content[lang].navbar.course}
                </NavLink>
              </li> */}
              {/* <li className='header__bottom__list__item'>
                <a
                  href='https://182maktab.uz'
                  target='_blank'
                  className=' header__bottom__list__item__link'
                >
                  {content[lang].navbar.kirish}
                </a>
              </li>
              <li className='header__bottom__list__item'>
                <NavLink to='/contact' className='header__bottom__list__item__link'>
                  {content[lang].navbar.kontakt}
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
