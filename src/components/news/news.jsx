import SchoolNews from '../../database/News.json';
import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import useLang from '../../Hooks/useLang';
import content from '../../Localization/content';

import backurl from '../../links';
import React, { useState } from 'react';
import moment from 'moment';

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

  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${backurl}/api/get/all/blog`, {
          method: 'get',
        });
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }

        const data = await response.json();
        console.log(data);

        const reversedData = data.reverse();
        const latestFourElements = reversedData.slice(0, 4);
        setBlogs(latestFourElements);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <>
      <div className='newsPart'>
        <div className='container'>
          <h2 className='NewsHeading'>{content[lang].news.heading}</h2>
          <div className='newsGridContainer'>
            {blogs ? (
              blogs.map(e => {
                return (
                  <NavLink
                    to={`/news/${e.blog_id}`}
                    className='newsCard'
                    key={e.blog_id}
                    data-aos='fade-down'
                    data-aos-duration='1000'
                    data-aos-delay='50'
                    onClick={goToTop}
                  >
                    <img src={`${backurl}upload/${e.img}`} className='newsImage' alt='' />
                    <strong className='Eventname'>{e.title}</strong>
                  </NavLink>
                );
              })
            ) : (
              <div>
                <p className='text-center'>Don't have any news</p>
              </div>
            )}
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
