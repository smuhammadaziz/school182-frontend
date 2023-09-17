import React from 'react';
import './students.scss';
import data from '../../database/data_students.json';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { NavLink } from 'react-router-dom';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

const AllStudents = () => {
  const [lang] = useLang('ru');
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
    <div className='activepupilss'>
      <div className='container'>
        <div className='cards'>
          {data.map(e => {
            return (
              <div className='card' key={e.id} data-aos='fade-right'>
                <img src={e.img} alt='each pupil photo' width='250' height='250' />
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
                    {content[lang].news.moreinfo}
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AllStudents;
