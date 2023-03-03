import React, { useState, useEffect } from 'react';
import './header.scss';

import { NavLink } from 'react-router-dom';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

import logo from '../../assets/images/logo.svg';

import Hamburger from 'hamburger-react';

const Header = () => {
  const [lang, setLang] = useLang('uz');
  const [isOpen, setOpen] = useState(false);

  const selectedValue = value => {
    setLang(value);
  };

  const handleChangeSwitcher = e => {
    selectedValue(e.target.value);
  };
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__logo'>
          <NavLink to='/' className='header__logo__link'>
            <p className='header__logo__text'>
              <img src={logo} alt='182 maktab logo maktab logo' width='115' height='53' />
            </p>
          </NavLink>
        </div>

        <nav className='header__navbar'>
          <ul className='header__list'>
            <li className='header__list__item'>
              <NavLink to='/' className='header__list__item__link'>
                {content[lang].navbar.home}
              </NavLink>
            </li>
            <li className='header__list__item'>
              <NavLink to='/' className='header__list__item__link'>
                {content[lang].navbar.news}
              </NavLink>
            </li>

            <li className='header__list__item'>
              <NavLink to='/' className='header__list__item__link'>
                {content[lang].navbar.contact}
              </NavLink>
            </li>
            <li className='header__list__item'>
              <NavLink to='/' className='header__list__item__link'>
                {content[lang].navbar.administration}
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className='header__language'>
          <select
            name='language'
            id=''
            className='header__select'
            onChange={handleChangeSwitcher}
          >
            <option value='ru'>ru</option>
            <option value='uz'>uz</option>
          </select>
        </div>

        <div className='header__btn'>
          <button className='header__button'>
            {content[lang].navbar.contact_button}
          </button>
        </div>

        <div className='header__hamburger'>
          <Hamburger toggled={isOpen} toggle={setOpen} size={27} />
        </div>
      </div>
    </div>
  );
};

export default Header;
