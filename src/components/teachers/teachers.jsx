import React from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Teachers from '../../database/Teachers.json';
import TeacherPhoto from '../../assets/images/teacherphoto.jpg';
import { useEffect } from 'react';
import './style.scss';
import { NavLink } from 'react-router-dom';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

function Teachres() {
  const [lang] = useLang('ru');
  const ShortData = Teachers.slice(0, 6);

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
      <div className='TeachersPart'>
        <div className='container'>
          <h1 className='sarlavha'>{content[lang].news.teachers}</h1>
          <div className='Teacherscards'>
            {ShortData.map(e => {
              return (
                <div
                  className='TeachersData'
                  key={e.id}
                  data-aos='fade-left'
                  data-aos-duration='1000'
                  data-aos-delay='50'
                >
                  <img
                    className='TeacherPhoto'
                    src={TeacherPhoto}
                    alt='teacher rasm photo'
                    width='350'
                  />
                  <div className='TeacherSub'>
                    <h2 className='TeacherName'>{e.TeacherName}</h2>
                    <p className='Job'>{e.Job}</p>
                    <NavLink
                      to='/teachers/1'
                      className='teacherssub__link'
                      onClick={goToTop}
                    >
                      {content[lang].news.moreinfo}
                    </NavLink>
                  </div>
                </div>
              );
            })}
          </div>
          <NavLink className='more' to='/teachers' onClick={goToTop}>
            {content[lang].news.more}
          </NavLink>
        </div>
      </div>
    </>
  );
}

export default Teachres;
