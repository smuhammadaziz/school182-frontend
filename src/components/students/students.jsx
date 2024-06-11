import React from 'react';
import './style.scss';
import data from '../../database/data_students.json';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { NavLink } from 'react-router-dom';
import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

import backurl from '../../links';
import { useState, useEffect } from 'react';
import moment from 'moment';

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
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${backurl}/api/admin/get/students`, {
          method: 'get',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        // console.log(data);

        const reversedData = data.reverse();
        setBlogs(reversedData);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className='activepupilss'>
      <div className='container'>
        <h1 className='sarlavha activeaaaaaa'>{content[lang].students.heading}</h1>
        <div className='cards'>
          {blogs
            ? blogs.map(e => {
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
              })
            : 'null'}
        </div>
        <NavLink className='more students__morebtn' to='/students' onClick={goToTop}>
          {content[lang].students.more}
        </NavLink>
      </div>
    </div>
  );
};

export default Students;
