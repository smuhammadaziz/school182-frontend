import React from 'react';
import './news.scss';
import admins from '../../database/Administration.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

import photos from '../../assets/images/111.jpeg';

import { NavLink } from 'react-router-dom';

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

  return (
    <>
      <div className='admins'>
        <div className='container'>
          <div className='adminsWrapper'>
            {admins.map(e => {
              return (
                <NavLink
                  className='admin'
                  key={e.id}
                  data-aos='fade-right'
                  data-aos-duration='1000'
                  data-aos-delay='50'
                  to='/news/1'
                  onClick={goToTop}
                >
                  <img src={photos} className='AdminPhoto' alt='' />
                  <div className='AdminSubs'>
                    <strong className='AdminName'>Title</strong>
                    {/* <p className='AdminPosition'>Yangilik desc </p> */}
                  </div>
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default AllNews;
