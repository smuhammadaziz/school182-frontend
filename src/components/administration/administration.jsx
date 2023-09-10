import React from 'react';
import './style.scss';
import admins from '../../database/Administration.json';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

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
                  to='/admins/1'
                  onClick={goToTop}
                >
                  <img src={e.img} className='AdminPhoto' alt='' />
                  <div className='AdminSubs'>
                    <strong className='AdminName'>{e.name}</strong>
                    <p className='AdminPosition'>{e.position}</p>
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

export default Administration;
