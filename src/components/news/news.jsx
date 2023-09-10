import React from 'react';
import SchoolNews from '../../database/News.json';
import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

function News() {
  const [lang] = useLang('ru');
  const ShortNews = SchoolNews.reverse().slice(0, 4);
  useEffect(() => {
    AOS.init();
  });

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className='newsPart'>
        <div className='container'>
          <h2 className='NewsHeading'>{content[lang].news.heading}</h2>
          <div className='newsGridContainer'>
            {ShortNews.map(e => {
              return (
                <NavLink
                  to='/news'
                  className='newsCard'
                  key={e.id}
                  data-aos='fade-down'
                  data-aos-duration='1000'
                  data-aos-delay='50'
                  onClick={goToTop}
                >
                  <img src={e.img} className='newsImage' alt='' />
                  <strong className='Eventname'>{e.event}</strong>
                </NavLink>
              );
            })}
          </div>
          <NavLink className='more' to='/news' onClick={goToTop}>
            {content[lang].news.more}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default News;
