import React from 'react';
import './news.scss';
import admins from '../../database/Administration.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import photos from '../../assets/images/111.jpeg';

import { NavLink } from 'react-router-dom';

import backurl from '../../links';
import { useState } from 'react';
import moment from 'moment';

function AllNews() {
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
    <>
      <div className='admins'>
        <div className='container'>
          <div className='adminsWrapper'>
            {blogs ? (
              blogs.map(e => {
                return (
                  <NavLink
                    className='admin'
                    key={e.blog_id}
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-delay='50'
                    to={`/news/${e.blog_id}`}
                    onClick={goToTop}
                  >
                    <img
                      src={`${backurl}upload/${e.img}`}
                      className='AdminPhoto'
                      alt=''
                    />
                    <div className='AdminSubs'>
                      <strong className='AdminName'>{e.title}</strong>
                      {/* <p className='AdminPosition'>Yangilik desc </p> */}
                    </div>
                  </NavLink>
                );
              })
            ) : (
              <div>
                <p>don't have any news</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllNews;
