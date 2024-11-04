import React, { useEffect } from 'react';
import './style.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { NavLink } from 'react-router-dom';
import backurl from '../../links';

const admins = [
  {
    "id": 1,
    "name": "John",
    "l_name": "Doe",
    "position": "Principal",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
  },
  {
    "id": 2,
    "name": "Jane",
    "l_name": "Smith",
    "position": "Vice Principal",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
  },
  {
    "id": 3,
    "name": "Michael",
    "l_name": "Johnson",
    "position": "Head of Mathematics",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
  },
  {
    "id": 4,
    "name": "Emily",
    "l_name": "Davis",
    "position": "Science Coordinator",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
  },
  {
    "id": 5,
    "name": "David",
    "l_name": "Brown",
    "position": "Athletic Director",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
  },
  {
    "id": 6,
    "name": "Sophia",
    "l_name": "Martinez",
    "position": "Head of Arts",
    "image": "https://www.hindustantimes.com/ht-img/img/2023/09/02/1600x900/teachers_day_1693652054152_1693652065719.jpg"
  }
]


function Administration() {
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
    <div className='admins'>
      <div className='container'>
        <div className='adminsWrapper'>
          {admins.length > 0 ? (
            admins.map((admin) => (
              <NavLink
                className='admin'
                key={admin.id}
                data-aos='fade-right'
                data-aos-duration='1000'
                data-aos-delay='50'
                to={`/admins/${admin.id}`}
                onClick={goToTop}
              >
                <img
                  src={admin.image}
                  className='AdminPhoto'
                  alt={`${admin.name} ${admin.l_name}`}
                />
                <div className='AdminSubs'>
                  <strong className='AdminName'>
                    {admin.name} {admin.l_name}
                  </strong>
                  <p className='AdminPosition'>{admin.position}</p>
                </div>
              </NavLink>
            ))
          ) : (
            <div>
              <p>Don't have any admins</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Administration;
