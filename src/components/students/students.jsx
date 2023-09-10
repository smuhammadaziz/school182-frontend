import React from 'react';
import './style.scss';
import data from '../../database/data_students.json';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { NavLink } from 'react-router-dom';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

const Students = () => {
  const [lang] = useLang('ru');
  const datas = data.slice(0, 6);
  useEffect(() => {
    AOS.init();
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className='activepupils'>
      <div className='container'>
        <h1 className='sarlavha'>{content[lang].students.heading}</h1>
        <div className='cards'>
          {datas.map(e => {
            return (
              <div className='card' key={e.id} data-aos='fade-right'>
                <img src={e.img} alt='' />
                <div className='texts'>
                  <h4 className='blue' style={{ fontWeight: 700 }}>
                    {e.name} {e.surname} <br /> {e.fathername}
                  </h4>
                  <br />
                  <p>
                    {content[lang].students.text1} {e.class}{' '}
                    {content[lang].students.text2}
                  </p>
                  <br />
                  <p className='blue' style={{ fontWeight: 700 }}>
                    {content[lang].students.teacher}
                  </p>
                  <br />
                  <p>
                    {e.teachener_name} {e.teachener_surname}
                  </p>
                  <NavLink
                    to='/students/1'
                    className='teacherssub__link'
                    onClick={goToTop}
                  >
                    koproq
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
        <NavLink className='more students__morebtn' to='/students' onClick={goToTop}>
          {content[lang].students.more}
        </NavLink>
      </div>
    </div>
  );
};

export default Students;
