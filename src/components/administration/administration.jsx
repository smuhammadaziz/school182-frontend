import React from 'react';
import './style.scss';
import admins from '../../database/Administration.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';

import backurl from '../../links';
import { useState, useEffect } from 'react';
import moment from 'moment';

function Administration() {
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
        const response = await fetch(`${backurl}/api/admin/get/teachers`, {
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
                    key={e.id}
                    data-aos='fade-right'
                    data-aos-duration='1000'
                    data-aos-delay='50'
                    to={`/admins/${e.id}`}
                    onClick={goToTop}
                  >
                    <img
                      src={`${backurl}upload/${e.image}`}
                      className='AdminPhoto'
                      alt=''
                    />
                    <div className='AdminSubs'>
                      <strong className='AdminName'>
                        {e.name} {e.l_name}
                      </strong>
                      <p className='AdminPosition'>{e.position}</p>
                    </div>
                  </NavLink>
                );
              })
            ) : (
              <div>
                <p>don't have any admins</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Administration;
